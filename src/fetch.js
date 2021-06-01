import { showWeather } from './display';
import api from './utility';

const errorText = document.getElementById('error-text');

function fetchData(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
  fetch(url, { mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Enter correct city');
    })
    .then((data) => {
      showWeather(data);
    })
    .catch((error) => {
      errorText.textContent = error;
    });
}

export default fetchData;