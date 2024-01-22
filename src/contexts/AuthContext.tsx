import { createContext, useState } from "react";

type TUser = {
    user_id?: number;
    user_name: string | undefined;
    user_email?: string | undefined;
    user_password?: string | undefined;
    user_level?: string | undefined;
    token?: string | undefined;
}
  // @ts-expect-error not possible validation type of context
export const AuthContext = createContext();
  // @ts-expect-error not possible validation type of context
export const AuthProvider = ({children}): JSX.Element => {
      // @ts-expect-error not possible validation type of context
    const [userCredencial, setUserCredencial] = useState<TUser>(JSON.parse(localStorage.getItem("user")) || undefined);

    return (
        <>
            <AuthContext.Provider value={{userCredencial, setUserCredencial}}>
                {children}
            </AuthContext.Provider>
        </>
    );
};