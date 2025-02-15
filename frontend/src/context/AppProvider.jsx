import { createContext, useState } from "react"

export const AppContext = createContext();

export function AppProvider({ children }) {

    const [infoBoxX, setInfoBoxX] = useState(0);
    const [infoBoxY, setInfoBoxY] = useState(0);
    const [showInfoBox, setShowInfoBox] = useState(false);

    const handleMouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;

        setInfoBoxX(x + 10);
        setInfoBoxY(y + 10);
    }



    return (
        <AppContext.Provider value={{ infoBoxX, infoBoxY, handleMouseMove, showInfoBox, setShowInfoBox }}>
            {children}
        </AppContext.Provider>
    )
}
