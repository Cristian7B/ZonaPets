import { createContext, useState } from "react"
export const DataUserContext = createContext()

export function DataUserProvider({children}) {
    const [dataUser, setDataUser] = useState()
    const [stateRegister, setStateRegister] = useState(false)
    const [token, setToken] = useState()
    return (
        <DataUserContext.Provider value={{dataUser, setDataUser, token, setToken, stateRegister, setStateRegister}}>
            {children}
        </DataUserContext.Provider>
    )
}