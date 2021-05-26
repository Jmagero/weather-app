const showWeather = (d) => {
  const celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  const name = d.sys.country;
  const city = d.name;
  const visibility = Math.round(d.visibility / 1000);
  const wind = d.wind.speed;
  const { humidity } = d.main;
  const { description } = d.weather[0];

  document.getElementById('temp').innerHTML = `temp: ${celcius}&degC`;
  document.getElementById('city').innerHTML = ` ${city},${name}`;
  document.getElementById('visibility').innerText = `Visibility:${visibility}km`;
  document.getElementById('wind').innerText = `Wind Speed: ${wind}m/s`;
  document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
  document.getElementById('description').innerText = description;

  if (description.indexOf('rain') > 0) {
    document.body.className = 'rainy';
  } else if (description.indexOf('cloud') > 0) {
    document.body.className = 'cloudy';
  } else if (description.indexOf('sunny') > 0) {
    document.body.className = 'sunny';
  }
};

export default showWeather;
