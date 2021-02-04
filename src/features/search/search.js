import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherByCity } from '../weather/weatherSlice'
export default function Search() {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    const submitCity = (event) => {
        event.preventDefault();
        if (city) {
            console.log(city);
            dispatch(
                fetchWeatherByCity(city)
            )
        }
    }
    const cityChanged = e => setCity(e.target.value)

    return (
            <div className="self-center h-40	">
                <form  className="flex " >
                    <input type='hidden' placeholder="Search by city" className=" border-4 pl-4 max-w-xs leading-4	 border-gray-80 focus:outline-none rounded-full"  />
                    <input value={city} onChange={cityChanged} placeholder="Search by city" className=" border-4 pl-4 max-w-xs leading-4	 border-gray-80 focus:outline-none rounded-full" type="text" />
                    <button className="self-center justify-self-center btn bg-gray-300 focus:ring-1 focus:ring-gray-400 hover:bg-gray-400" type="submit" onClick={submitCity}  >
                        <svg className="w-6 h-6 opacity-80	" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
    )
}
