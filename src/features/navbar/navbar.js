import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'

export default function Navbar() {
    const history = useHistory();
    const currentWeather = useSelector(state=>state.weather.currentWeather)
    const [city,setCity] = useState(' ')
    const submitCity = ()=>{
        if(city){
            console.log(city);
            history.push(`/city/${city}`)
        }
    }
    const cityChanged = e=>setCity(e.target.value)

    return (
        <nav className="flex justify-around mt-8 text-xl    	 ">
            <Link  className={`${currentWeather?'pointer-events-none opacity-40':''} flex-initial justify-self-center`} to="/" >Current Location Weather</Link>
            <div className="flex flex-initial justify-self-center\">
                <input value={city} onChange={cityChanged}  placeholder="Search by city" className="flex-auto border-4 pl-4 max-w-xs	 border-gray-80 focus:outline-none rounded-full" type="text" />
                <button className="flex-1 self-center btn bg-gray-300 focus:ring-1 focus:ring-gray-400 " onClick={submitCity} >
                    <svg className="w-6 h-6 opacity-80	" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>   
            </div>
        </nav>
    )
}
