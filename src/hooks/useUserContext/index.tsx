import { useContext } from "react";
import UserContext, { UserContextProps } from "../../context/UserContext";

const useUserContext = (): UserContextProps => {
    const userContext = useContext<UserContextProps>(UserContext);
    return userContext;
}

export default useUserContext;