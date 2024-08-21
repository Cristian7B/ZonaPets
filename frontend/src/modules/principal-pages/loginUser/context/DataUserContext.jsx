import { createContext, useState } from "react"
export const DataUserContext = createContext()

export function DataUserProvider({children}) {
    const [dataUser, setDataUser] = useState()
    const [token, setToken] = useState()
    return (
        <DataUserContext.Provider value={{dataUser, setDataUser, token, setToken}}>
            {children}
        </DataUserContext.Provider>
    )
}