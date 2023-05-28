import { createContext, useState } from "react";



export const Context = createContext();

export const ContextProvider= ({ children }) =>{
    const [datos, setDatos] = useState({
        colores: {
            black: 'rgba(0, 0, 0, 0.9)',
            grayDark: 'rgba(0, 0, 0, 0.25)',
            grayMedium: '#191919',
            bluePrimary: '#2A7AE4',
        }

    })

    return (
        <Context.Provider value={datos}>{children}</Context.Provider>
    )
}