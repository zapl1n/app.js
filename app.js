document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = 'feabf737c0396f2a57dddb353e18684c';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) //Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function(){
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}

function drawWeather( data ) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celsius + '&deg';
    document.querySelector('#location').innerHTML = data.name;
}