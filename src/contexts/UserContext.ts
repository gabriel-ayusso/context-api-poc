import { createContext } from "react";
import { UserModel } from "../models/user";

export type UserContextData = {
    user?: UserModel;
    isLoggedIn: boolean;
    login: (user: UserModel) => void;
    logout: () => void;
}

const UserContext = createContext({} as UserContextData);
// Cuidado para exportar o UserContext, não o UserContextData.
export default UserContext; 