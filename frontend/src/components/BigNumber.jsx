import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
export function BigNumber() {

    const context = useContext(AppContext);


    return (
        <div>
            <h2>En todo el país</h2>
            <h2>{context.indicatorInfo["0700"] != undefined ? parseFloat(context.indicatorInfo["0700"][context.period]) : "Cargando..."}</h2>
        </div>
    );
}