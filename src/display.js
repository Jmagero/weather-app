
const degrees = {};

const showWeather = (d) => {
  degrees.celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  degrees.fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
  const name = d.sys.country;
  const cityName = d.name;
  const visibility = Math.round(d.visibility / 1000);
  const wind = d.wind.speed;
  const { humidity } = d.main;
  const { description } = d.weather[0];

  document.getElementById('temp').innerText = `temp: ${degrees.celcius}°C`;
  document.getElementById('city').innerHTML = ` ${cityName},${name}`;
  document.getElementById('visibility').innerText = `Visibility:${visibility}km`;
  document.getElementById('wind').innerText = `Wind Speed: ${wind}m/s`;
  document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
  document.getElementById('description').innerText = `Description: ${description}`;

  if (description.indexOf('rain') > 0) {
    document.body.className = 'rainy';
  } else if (description.indexOf('cloud') > 0) {
    document.body.className = 'cloudy';
  } else if (description.indexOf('sunny') > 0) {
    document.body.className = 'sunny';
  }
};
export { showWeather, degrees };
