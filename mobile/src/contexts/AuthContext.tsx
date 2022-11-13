import { createContext, ReactNode } from "react";
import { SignIn } from "../screens/SignIn";

interface UserProps{
    name: string,
    avatarurl: string
}

export interface AuthContextDataProps {
    user: UserProps,
    signIn: () => Promise<void>;
}

interface AuthProviderProps{
    children: ReactNode;
} 

export const AuthContext = createContext({} as AuthContextDataProps );


export function AuthContextProvider({children}:AuthProviderProps){

    async function signIn(){};

    return(
        <AuthContext.Provider
            value={{
                signIn,
                user:{
                    name:'Lucas',
                    avatarurl:'www.github.com/lucas-mateus.png'
                }
            }}
        >

        </AuthContext.Provider>
    )

}