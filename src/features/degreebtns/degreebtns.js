import React from 'react'
import { fahrenheit,celsius } from '../weather/weatherSlice'
import { useDispatch,useSelector } from 'react-redux'
export default function DegreeBtns() {
    const dispatch = useDispatch() 
    const activeDegree = useSelector(state => state.weather.fahrenheit)
    console.log(fahrenheit);
    return (
        <div className="flex flex-intial flex-col h-40  justify-end" >
            <button onClick={()=>dispatch(fahrenheit())} className={`btn w-48 self-center border border-black ${activeDegree?'bg-black pointer-events-none	underline text-white':'hover:text-white hover:bg-black'} `}>fahrenheit</button>
            <button onClick={()=>dispatch(celsius())} className={`btn w-48 mt-2 self-center border border-black ${!activeDegree?'bg-black pointer-events-none	underline text-white':'hover:text-white hover:bg-black'} `}>Celsius</button>

        </div>
    )
}
