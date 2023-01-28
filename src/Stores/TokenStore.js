import React from "react"
import { useLocalStore } from "mobx-react"

export const StoreContext = React.createContext()

export const StoreProvider = ({children}) => {
    const tokenStore = useLocalStore(() => ({
        token: "",
        addToken: (token) => {
            tokenStore.token = token.access_token
        }
})

)
console.log(tokenStore.token)
return (
    <StoreContext.Provider value={tokenStore}>{children}</StoreContext.Provider>
    )
}



