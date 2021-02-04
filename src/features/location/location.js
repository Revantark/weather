import React from 'react'
import { useSelector } from 'react-redux'
export default function Location() {
    const weather = useSelector(state => state.weather)
    const currentweatherLink = weather.locationPermission === "granted" && !weather.currentWeather ? <a className="underline" href="/">Get current location weather</a>
        : <span></span>
    return (
        <div className="bg-black flex h-screen flex-1 flex-col text-white " >
            <div className="flex flex-col h-40  justify-end pb-10 ">
            </div>
            <div className="flex-1 flex flex-col justify-center content-center text-center ">
                <span className=" text-4xl self-center" >{weather.time} </span>
                <span className="self-center jus text-5xl pb-2 pt-2 uppercase" >{weather.location}</span>
                {currentweatherLink}
            </div>
            <div className="flex flex-col h-40  justify-end pb-10 ">
                <span className="self-center" >
                    Allow location permission, to show your current location weather
                </span>
            </div>
        </div>
    )
}