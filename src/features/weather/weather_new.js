import React from 'react'
import DegreeBtns from '../degreebtns/degreebtns'
import Search from '../search/search'
import Weather from './weather'

export default function WeatherNew() {
    return (
        <div  className="flex flex-col flex-1 h-screen content-center pt-10 pb-10 " >
            <Search />
            <Weather/>
            <DegreeBtns/>
        </div>
    )
}
