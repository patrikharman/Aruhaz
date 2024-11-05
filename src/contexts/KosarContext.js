import { createContext, useState } from "react";

export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
    const [kosarLista, setKosarLista] = useState([]);

    function katt(adat) {
        
    }

    return (
        <KattContext.Provider value={{ kosarLista, katt }}>
            {children}
        </KattContext.Provider>
    );
}