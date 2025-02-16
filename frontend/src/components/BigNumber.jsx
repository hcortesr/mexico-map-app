import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
import { NumberFormatter } from "../App";

export function BigNumber() {

    const context = useContext(AppContext);


    return (
        <div className="rounded-lg overflow-hidden static w-full md:absolute top-0 right-0 mr-11 md:w-auto">
            <h2 className="bg-sky-300 text-3xl font-bold text-center p-3">En todo el país</h2>
            <h2 className="text-2xl p-3 text-center md:text-left">{context.indicatorInfo["0700"] != undefined ? NumberFormatter(parseFloat(context.indicatorInfo["0700"][context.period])) : "Cargando..."}</h2>
        </div>
    );
}