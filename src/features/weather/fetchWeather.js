import { apiKey } from '../../open_weather_config';

function to12Hr(hr,min){
    let meridian = 'AM'
    let hours = hr
    if(hr>12){
        meridian = "PM"
        hours = hours - 12
    }
    min = min<10?`0${min}`:min
    return `${hours}:${min} ${meridian}`
}

export default async function FetchWeatherAPI({ currentPosition = undefined, city = "" ,fdegree=false}) {
    const axios = require('axios');
    let response;
    const units = fdegree?'units=imperial':'units=metric'
    console.log(units);
    if (currentPosition) {
        const url = `http://api.openweathermap.org/data/2.5/weather?${units}&lat=${currentPosition.coords.latitude.toFixed(6)}&lon=${currentPosition.coords.longitude.toFixed(6)}&appid=${apiKey}`
        response = await axios.get(url)
    }
    else {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&${units}&appid=${apiKey}`
        response = await axios.get(url)

    }
    const temp = response.data.main.temp
    let weatherIcon = response.data.weather[0].main;
    let desc = response.data.weather[0].description
    let id = Math.floor(response.data.weather[0].id / 100)
    let time, hr
    
    const date = new Date()
    if (city) {

        let localTime = date.getTime()
        let localOffset = date.getTimezoneOffset() * 60000
        let utc = localTime + localOffset
        var curr = utc + (1000 * response.data.timezone)
        let nd = new Date(curr)
        hr = nd.getHours();
        const min = nd.getMinutes()
        
        
        time = to12Hr(hr,min)
    } else {
        hr = date.getHours();
        const min = date.getMinutes()
        
        
        time = to12Hr(hr,min)

    }
    if (id === 7) {
        weatherIcon = 'mist'
    }
    if (weatherIcon === 'Clear') {
        hr = date.getMinutes()
        if(hr>=1 && hr<=6)
            weatherIcon = 'moon'

        else if (hr >= 7 && hr <= 19) {
            weatherIcon = "sun"
        }
        else if (hr > 19) {
            weatherIcon = 'moon'
        }
    }

    console.log(weatherIcon);
    const location = response.data.name;
    const locationPermission =  (await navigator.permissions.query({name: 'geolocation'})).state
    console.log(locationPermission);
    return { temp, time, weatherIcon, location, desc ,locationPermission};
}