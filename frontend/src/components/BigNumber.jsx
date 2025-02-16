import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
export function BigNumber() {

    const context = useContext(AppContext);


    return (
        <div className="container-big-num ">
            <h2 className="big-num-title">En todo el país</h2>
            <h2 className="big-num-value bg-sky-50">{context.indicatorInfo["0700"] != undefined ? parseFloat(context.indicatorInfo["0700"][context.period]) : "Cargando..."}</h2>
        </div>
    );
}