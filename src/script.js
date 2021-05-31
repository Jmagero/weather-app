import '@fortawesome/fontawesome-free/js/all';
import fetchData from './fetch';
import { fahrenheit, celcius } from './display';

const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const currenttemp = document.getElementById('temp');
const checkboxDiv = document.querySelector('.checkboxDiv');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const country = document.getElementById('location').value;
  checkboxDiv.classList.add('display');
  fetchData(country);
});

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    currenttemp.textContent = `temp: ${fahrenheit}°F`;
  } else {
    currenttemp.textContent = `temp: ${celcius}°C`;
  }
});
