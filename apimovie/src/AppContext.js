import { createContext, useState } from "react";

export const AppContext=createContext({})
export const AppProvider=({children})=>{
const [show,setShow]=useState(false)
const [count,setCount]=useState(1)
    return(
        <AppContext.Provider value={{show,count}}>
            {children}
        </AppContext.Provider>
    )
}