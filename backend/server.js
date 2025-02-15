const express = require('express');
const morgan = require('morgan');

const API_KEY = "68ec4bea-867c-69f0-2193-ea87720073f2";

// Variables importantes


const STATE_ID = {
    'nacional': '0700',
    'aguascalientes': '07000001',
    'baja_california': '07000002',
    'baja_california_sur': '07000003',
    'campeche': '07000004',
    'chiapas': '07000005',
    'chihuahua': '07000006',
    'ciudad_de_mexico': '07000007',
    'coahuila': '07000008',
    'colima': '07000009',
    'durango': '07000010',
    'guanajuato': '07000011',
    'guerrero': '07000012',
    'hidalgo': '07000013',
    'jalisco': '07000014',
    'mexico': '07000015',
    'michoacan': '07000016',
    'morelos': '07000017',
    'nayarit': '07000018',
    'nuevo_leon': '07000019',
    'oaxaca': '07000020',
    'puebla': '07000021',
    'queretaro': '07000022',
    'quintana_roo': '07000023',
    'san_luis_potosi': '07000024',
    'sinaloa': '07000025',
    'sonora': '07000026',
    'tabasco': '07000027',
    'tamaulipas': '07000028',
    'tlaxcala': '07000029',
    'veracruz': '07000030',
    'yucatan': '07000031',
    'zacatecas': '07000032'
};

const STATE_STRING_1 = "0700,07000001,07000002,07000003,07000004,07000005,07000006,07000007,07000008,07000009";
const STATE_STRING_2 = "07000010,07000011,07000012,07000013,07000014,07000015,07000016,07000017,07000018,07000019"
const STATE_STRING_3 = "07000020,07000021,07000022,07000023,07000024,07000025,07000026,07000027,07000028,07000029,07000030,07000031,07000032";

const app = express();

app.use(morgan('dev'));

app.get('/info', async (req, res) => { // Población total: 1002000001 | El 'fetch' solo funciona con 16 estados a la vez.
    const { indicator } = req.query

    // Leer primer indicador
    let url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${indicator}/es/${STATE_STRING_1}/false/BISE/2.0/${API_KEY}?type=json`;
    const data1 = await fetch(url);
    const data1JSON = await data1.json(); // En series de tiempo, las observaciones se devuelven en orden, y primero las del primer estado.

    // Leer primer indicador
    url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${indicator}/es/${STATE_STRING_2}/false/BISE/2.0/${API_KEY}?type=json`;
    const data2 = await fetch(url);
    const data2JSON = await data2.json(); // En series de tiempo, las observaciones se devuelven en orden, y primero las del primer estado.

    url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/${indicator}/es/${STATE_STRING_3}/false/BISE/2.0/${API_KEY}?type=json`;
    const data3 = await fetch(url);
    const data3JSON = await data3.json(); // En series de tiempo, las observaciones se devuelven en orden, y primero las del primer estado.

    resDict = {};
    data1JSON["Series"][0]['OBSERVATIONS'].forEach(value => {
        resDict[value["COBER_GEO"]] = { ...resDict[value["COBER_GEO"]], [value["TIME_PERIOD"]]: value["OBS_VALUE"] }
    })
    data2JSON["Series"][0]['OBSERVATIONS'].forEach(value => {
        resDict[value["COBER_GEO"]] = { ...resDict[value["COBER_GEO"]], [value["TIME_PERIOD"]]: value["OBS_VALUE"] }
    })
    data3JSON["Series"][0]['OBSERVATIONS'].forEach(value => {
        resDict[value["COBER_GEO"]] = { ...resDict[value["COBER_GEO"]], [value["TIME_PERIOD"]]: value["OBS_VALUE"] }
    })
    res.send(resDict);

})

app.listen(3000);
console.log("http://localhost:3000/");
