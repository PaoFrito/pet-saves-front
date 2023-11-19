import React, { createContext, useState } from "react";
import axios from "axios";
import { User } from "../../model/User";

type Credentials = {
    email:string, 
    password: string
}

export type UserContextProps = {
    userState: User;
    login: ({credentials} : {credentials: Credentials}) => Promise<void>;
    logout: () => void;
};

type UserContextProviderProps = {
    children: React.ReactNode;
};

const DEFAULT_VALUES = {
    userState: {
        id: "",
        img: "",
        name: ""
    },
    login: async () => {},
    logout: () => {}
};

const UserContext = createContext<UserContextProps>(DEFAULT_VALUES);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    
    const [userState, setUserState] = useState<User>({...DEFAULT_VALUES.userState});

    const login = async ({credentials} : {credentials: Credentials}) => {
        let user: User
        await axios.post('', [credentials.email, credentials.password]).then(
            (res) => {
                user.id = res.data.id;
                user.img = res.data.img;
                user.name = res.data.name;

                setUserState(user);

                localStorage.setItem('user_access_token', res.data.token)
                localStorage.setItem('user_id',  user.id)
                localStorage.setItem('user_img', user.img)
                localStorage.setItem('user_name', user.name)
            }
        ).catch((e)=>{console.log(e)});
    }

    const logout = () => {  
        localStorage.removeItem('user_access_token')
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_img')
        localStorage.removeItem('user_name')
        setUserState({...DEFAULT_VALUES.userState});
    }
    
    return (
        <UserContext.Provider
            value={{
                userState,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
export { UserContextProvider };