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
    .catch(function(e) {
		e
	});
}

function showWeather(d){
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    var name = d.sys.country;
    var city = d.name;
    var visibility = Math.round(d.visibility/1000);
    var wind = d.wind.speed;
    var humidity = d.main.humidity;
    var description = d.weather[0].main;
	
	document.getElementById('temp').innerHTML = 'temp: '+ celcius + '&deg';
    document.getElementById('city').innerHTML = ' '+ city + ',' + name;
    document.getElementById('visibility').innerText = "Visibility:" + visibility+'km';
    document.getElementById('wind').innerText = "Wind Speed: " + wind + 'm/s';
    document.getElementById('humidity').innerText = 'Humidity: ' + humidity + '%';
    document.getElementById('description').innerText = description;
}
