import '@fortawesome/fontawesome-free/js/all.js';
import { fetchData } from './fetch';


const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let country = document.getElementById("location").value;
    fetchData(country);
});