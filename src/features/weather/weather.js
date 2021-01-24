import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentLocationWeather } from './weatherSlice'
import './weather.css'
import locationIcon from '../../icons/p.png'
export default function Weather() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((p) => {
                dispatch(fetchCurrentLocationWeather(p))
            })
        }
    }, [dispatch])

    const cWeather = useSelector(state => state.weather);
    let svgPath = `${process.env.PUBLIC_URL}/assets/${cWeather.icon}.svg`



    return (
        <div className="temperature" >
            <img className="w-icon" width="125px" height="125px" src={svgPath} alt="icon" />
            <span className="temp" >{cWeather.temp}<sup>°</sup>  C</span>
            <div className="loc">
                <img className="w-5 h-5" src={locationIcon} alt="location-icon" />
                
                <span className="location" >{cWeather.location}</span>
            </div>
        </div>
    )
}
