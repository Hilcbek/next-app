"use client"
import { createContext, useState } from "react";


export let SearchContext = createContext();

export let SearchProvider = ({children}) => {
    let [search,setSearch] = useState(false)
    return(
        <SearchContext.Provider value={{ search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}