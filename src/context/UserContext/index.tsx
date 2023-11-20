import React, { createContext, useState } from "react";
import axios from "axios";
import { User } from "../../model/User";

type Credentials = {
  username: string;
  password: string;
};

export type UserContextProps = {
  userState: User;
  login: ({ credentials }: { credentials: Credentials }) => Promise<void>;
  logout: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  userState: {
    id: "",
    email: "",
    username: "",
    imageUrl: "",
    accessToken: "",
  },
  login: async () => {},
  logout: () => {},
};

const UserContext = createContext<UserContextProps>(DEFAULT_VALUES);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userState, setUserState] = useState<User>({
    ...DEFAULT_VALUES.userState,
  });

  if(!userState.accessToken || userState.accessToken === ''){
    const userStorage = localStorage.getItem('user')
    if(userStorage){
      setUserState(JSON.parse(userStorage))
    }
  }

  const login = async ({ credentials }: { credentials: Credentials }) => {
    const url = `${import.meta.env.VITE_BASE_API_URL}/v1/auth/login`;
    const res = await axios.post(url, credentials);

    if (res.status !== 200) {
      console.log(res);
      return Promise.reject();
    }

    const user = {
        accessToken: `${res.data.oauthToken.type} ${res.data.oauthToken.accessToken}`,
        refreshToken: `${res.data.oauthToken.type} ${res.data.oauthToken.refreshToken}`,
        email: res.data.user.email,
        id: res.data.user.id,
        imageUrl: res.data.user.imageUrl,
        username: res.data.user.username,
    }
    localStorage.setItem("user", JSON.stringify(user));
    setUserState(user);
    return Promise.resolve();
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserState(DEFAULT_VALUES.userState);
    window.location.replace('/login');
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
