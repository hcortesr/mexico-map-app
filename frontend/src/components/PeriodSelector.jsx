import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export function PeriodSelector() {
    const { setPeriod, indicatorInfo } = useContext(AppContext);

    if (indicatorInfo["0700"]) {
        return (
            <select className="opt-selector" name="" id="" onChange={(e) => setPeriod(e.target.value)}>
                {Object.keys(indicatorInfo["0700"]).reverse().map((value, index) => {
                    return <option value={value} key={index}>{value}</option>
                })}
            </select>
        );
    }

}