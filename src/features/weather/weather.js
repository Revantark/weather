import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentLocationWeather,fetchWeatherByCity } from './weatherSlice'
// import './weather.css'
import { useParams } from 'react-router-dom'
import locationIcon from '../../icons/p.png'
export default function Weather() {
    const dispatch = useDispatch();
    const {name} = useParams()
    useEffect(() => {
        if(name){
            dispatch(fetchWeatherByCity(name))
        }
        else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((p) => {
                dispatch(fetchCurrentLocationWeather(p))
            })
        }
    }, [dispatch,name])

    const cWeather = useSelector(state => state.weather);
    let svgPath = `${process.env.PUBLIC_URL}/assets/${cWeather.icon}.svg`



    return (
        <div className="h-screen flex flex-wrap content-center self-center" >
            <div className="pb-32 grid grid-cols-2">
            <img  width="125px" height="125px" src={svgPath} alt="icon" />
            <div className="flex flex-col self-center justify-self-center">
            <span className="text-4xl" >{cWeather.temp}<sup>°</sup>  C</span>
            <div className="flex justify-items-auto content-center">
                <img className="w-4 h-4 mt-1 mr-1" src={locationIcon} alt="location-icon" />
                
                <span className="location" >{cWeather.location}</span>
            </div>
            </div>
            </div>
        </div>
    )
}
