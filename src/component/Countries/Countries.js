import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [counries,setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div >
            <h1>hello form countries:{counries.length}</h1>
            <div className='contries-container'>
            {
                counries.map(country=><Country 
                    country ={country}
                    key ={country.cca3}
                   >

                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;