import '@fortawesome/fontawesome-free/js/all';
import fetchData from './fetch';
import { degrees } from './display';

const form = document.getElementById('form');
const checkbox = document.getElementById('checkbox');
const currenttemp = document.getElementById('temp');
const checkboxDiv = document.querySelector('.checkboxDiv');
const errorText = document.getElementById('error-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('location').value;
  if (city === '' || city === null) {
    errorText.innerText = " city can't be blank, try again!";
    return;
  }
  fetchData(city);
  checkboxDiv.classList.add('display');
});

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    currenttemp.textContent = `temp: ${degrees.fahrenheit}°F`;
  } else {
    currenttemp.textContent = `temp: ${degrees.celcius}°C`;
  }
});
