import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="flex justify-around mt-8 text-xl    	 ">
            <Link className="flex-initial justify-self-center" to="/" >Current Location Weather</Link>
            
            <input placeholder="Search by city" className="flex-initial justify-self-center rounded-full" type="text"/>

        </nav>
    )   
}
