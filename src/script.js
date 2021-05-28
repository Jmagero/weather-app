import '@fortawesome/fontawesome-free/js/all';
import fetchData from './fetch';
import {showWeather, fahrenheit, celcius} from './display';

const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
let currenttemp = document.getElementById('temp');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const country = document.getElementById('location').value;
  fetchData(country);
});

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    currenttemp.textContent = `temp: ${fahrenheit}°F`;
  } else {
    currenttemp.textContent =  `temp: ${celcius}°C`;
  }
});
