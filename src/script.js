import '@fortawesome/fontawesome-free/js/all.js';
import { api } from './utility';


const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let country = document.getElementById("location").value;
    fetchData(country);
});
async function fetchData(country){

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api}`
    let res = await fetch(url, {mode: "cors"}) 
    let response = await res.json()
    .then(data => {
        showWeather(data)
    })
    .catch(function() {
		e
	});
}

async function loadData(name){
    const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1045a35b8ebf5f8cfdcd94f356e5da65`, {mode: "cors"});
    const data = await response.json();
    return data
};
console.log(loadData("Uganda"));









