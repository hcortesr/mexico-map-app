import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function PeriodSelector({ className }) {
    const { setPeriod, indicatorInfo } = useContext(AppContext);

    if (indicatorInfo["0700"]) {
        return (
            <select className={className} name="" id="" onChange={(e) => setPeriod(e.target.value)}>
                {Object.keys(indicatorInfo["0700"]).reverse().map((value, index) => {
                    return <option value={value} key={index}>{value}</option>
                })}
            </select>
        );
    }

}