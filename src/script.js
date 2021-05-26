import '@fortawesome/fontawesome-free/js/all';
import fetchData from './fetch';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const country = document.getElementById('location').value;
  fetchData(country);
});