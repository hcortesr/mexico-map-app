import { AppContext } from "../context/AppProvider";
import { useContext } from "react";


export function ListIndicators() {
    const context = useContext(AppContext);

    return (
        <select name="" id="" onChange={(e) => context.setIndicator(e.target.value)}>
            <option value="1002000001">Población total</option>
            <option value="1002000002">Población total hombres</option>
            <option value="1002000003">Población total mujeres</option>
            <option value="1002000010">Edad mediana</option>
            <option value="1002000011">Edad mediana hombres</option>
            <option value="1002000012">Edad mediana mujeres</option>
            <option value="3105001001">Densidad de Población</option>
            <option value="1002000041">% Mayores de 15 años alfabetas</option>
            <option value="1005000012">Mayores de 15 años que asisten a la escuela</option>
            <option value="3108001001">% Analfabetas</option>
            <option value="6200009438">Victimas muertas en accidentes de tránsito</option>
            <option value="1002000030">Defunciones registradas</option>
            <option value="1002000030">Defunciones registradas - Hombres</option>
            <option value="1002000030">Defunciones registradas - Mujeres</option>
            <option value="6200240338">Suicidios registrados</option>
            <option value="6200240497">Población no católica</option>
        </select>
    );
}