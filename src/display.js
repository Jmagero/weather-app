    const  showWeather = d => {
        let offset = -8;
        let  celcius = Math.round(parseFloat(d.main.temp)-273.15);
        let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
        let  name = d.sys.country;
        let  city = d.name;
        let visibility = Math.round(d.visibility/1000);
        let wind = d.wind.speed;
        let humidity = d.main.humidity;
        let description = d.weather[0].description;

	document.getElementById('temp').innerHTML = 'temp: '+ celcius + '&deg';
    document.getElementById('city').innerHTML = ' '+ city + ',' + name;
    document.getElementById('visibility').innerText = "Visibility:" + visibility+'km';
    document.getElementById('wind').innerText = "Wind Speed: " + wind + 'm/s';
    document.getElementById('humidity').innerText = 'Humidity: ' + humidity + '%';
    document.getElementById('description').innerText = description;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
}

export {showWeather}