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

function showWeather(d){
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('temp').innerHTML = celcius;
}









