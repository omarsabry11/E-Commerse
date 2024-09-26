import { createContext, useState } from "react"



export let CounterContext = createContext();


export function CounterContextProvider({children})
{
    const [itemsCount, setItemsCount] = useState(0)
    return <CounterContext.Provider value={{itemsCount,setItemsCount}}>
        {children}
    </CounterContext.Provider>
}