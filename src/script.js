import '@fortawesome/fontawesome-free/js/all.js';

async function loadData(name){
    const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1045a35b8ebf5f8cfdcd94f356e5da65`, {mode: "cors"});
    const data = await response.json();
    return data
};
console.log(loadData("Uganda"));









