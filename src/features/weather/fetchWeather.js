import { apiKey } from '../../open_weather_config';

export default async function FetchWeatherAPI({currentPosition=undefined,city=""})  {
    const axios = require('axios');
    let response;
    
    if(currentPosition){
        const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${currentPosition.coords.latitude.toFixed(6)}&lon=${currentPosition.coords.longitude.toFixed(6)}&appid=${apiKey}`
        response = await axios.get(url)
    }
    else{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        response = await axios.get(url)

    }
    let temp = response.data.main.temp
    let weatherIcon = response.data.weather[0].main;
    let id = Math.floor(response.data.weather[0].id/100)
    if(id === 7){
        weatherIcon = 'mist'
    }
    else if(weatherIcon==="Clear"){
        let hr = (new Date()).getHours();
        if(hr>=7){
            weatherIcon = "sun"
        }
        else if(hr>=19){
            weatherIcon = 'moon'
        }
    }
    let location = response.data.name;
    return {temp,weatherIcon,location};
}