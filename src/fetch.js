import { showWeather } from './display';
import { api } from './utility';

async function fetchData(country) {

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

export{fetchData};