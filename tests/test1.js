
const IdIndicador = 0; // Cambia este valor según el ID del indicador
const Idioma = "es"; // Cambia el idioma si es necesario
const AreaGeografica = "00"; // Cambia el área geográfica si es necesario
const Recientes = true; // Cambia si necesitas datos recientes o no
const FuenteDeDatos = "BISE"; // Cambia la fuente de datos si es necesario
const Version = "2.0"; // Cambia la versión si es necesario
const Token = "68ec4bea-867c-69f0-2193-ea87720073f2"; // Reemplaza con tu token válido
const Formato = "json"; // Cambia el formato si es necesario

// Construye la URL dinámicamente usando template strings
const url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${IdIndicador}/${Idioma}/${AreaGeografica}/${Recientes}/${FuenteDeDatos}/${Version}/${Token}?type=${Formato}`;

const url2 = " https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001,1002000002/es/07000001,07000011/true/BISE/2.0/68ec4bea-867c-69f0-2193-ea87720073f2?type=json"
// Realiza la solicitud fetch
fetch(url2)
    .then((res) => res.json())
    .then((data) => {
        console.log(data["Series"]);
        data["Series"].forEach((value) => {
            console.log(value['OBSERVATIONS'])
        })
    })
    .catch((error) => console.error("Error:", error));