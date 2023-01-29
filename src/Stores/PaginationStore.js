import React from "react"
import { useLocalStore } from "mobx-react"

export const PaginationContext = React.createContext()

export const PaginationProvider = ({children}) => {
    const paginationStore = useLocalStore(() => ({
        page: 1,
        nextPage: () => {
            paginationStore.page = paginationStore.page + 1
            
        },
        previousPage: () => {
            paginationStore.page = paginationStore.page - 1
           
        },
})

)

return (
    <PaginationContext.Provider value={paginationStore}>{children}</PaginationContext.Provider>
    )
}
