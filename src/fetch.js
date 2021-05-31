import { showWeather } from './display';
import api from './utility';

function fetchData(country) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api}`;
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      showWeather(data);
    });
}

export default fetchData;