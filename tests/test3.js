const url = "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/0700,07000001,07000002,07000003,07000004,07000005,07000006,07000007,07000008,07000009,07000010,07000011,07000012,07000013,07000014,07000016/true/BISE/2.0/68ec4bea-867c-69f0-2193-ea87720073f2?type=json";

fetch(url)
    .then(r => r.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.log("ERROR FATAL");
        console.log(error);
    })