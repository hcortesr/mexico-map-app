import { createContext, useEffect, useState } from "react"
import { stateID } from "../assets/countryID";

export const AppContext = createContext();

export function AppProvider({ children }) {

    // Parte encargada de que la caja de información siga el ratón.
    const [infoBoxX, setInfoBoxX] = useState(0);
    const [infoBoxY, setInfoBoxY] = useState(0);
    const [showInfoBox, setShowInfoBox] = useState(false);

    const handleMouseMove = (event) => {
        const x = event.clientX;
        const y = event.clientY;

        setInfoBoxX(x + 10);
        setInfoBoxY(y + 10);
    }

    // Parte encargada de la actualización de la información del mapa y la llama a la api.
    const [indicator, setIndicator] = useState("1002000001");
    const [indicatorInfo, setIndicatorInfo] = useState({});
    const [period, setPeriod] = useState("2020");
    const [infoContent, setInfoContent] = useState("nada");

    const updateInfoContent = (selectedCountry) => {
        setInfoContent(indicatorInfo[stateID[selectedCountry]][period]);
    }

    useEffect(() => {
        fetch(`http://localhost:3000/info?indicator=${indicator}`)
            .then(res => res.json())
            .then(data => {
                console.info("Ya se subio la nueva info");
                setIndicatorInfo(data)
            })
            .catch(error => console.log("ERROR FATAL", error))
    }, [indicator]);

    return (
        <AppContext.Provider value={{ infoBoxX, infoBoxY, handleMouseMove, showInfoBox, setShowInfoBox, infoContent, updateInfoContent }}>
            {children}
        </AppContext.Provider>
    )
}
