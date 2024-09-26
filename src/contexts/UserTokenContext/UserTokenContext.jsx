import { createContext, useState } from "react";


export let UserTokenContext = createContext();

export function UserTokenContextProvider({ children }) {
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
    return <UserTokenContext.Provider value={{ userToken }}>
        {children}
    </UserTokenContext.Provider>
}

