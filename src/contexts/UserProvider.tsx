import { useState } from "react";
import { UserModel } from "../models/user";
import UserContext from "./UserContext";

export default function UserProvider(props: any) {
    const [user, setUser] = useState<UserModel>();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (user: UserModel) => {
        setUser(user);
        setIsLoggedIn(true);
    }

    const logout = () => {
        setUser(undefined);
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}