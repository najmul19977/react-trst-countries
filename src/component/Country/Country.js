import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props.country)
    const {area,region,population,name,flags} = props.country
    //console.log(props.country);
    return (
        <div className='country bg-secondary'>
            <h2>Country Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>population: {population}</h2>
            <h2>area: {area}</h2>
            <h2>region:{region}</h2>
        </div>
    );
};

export default Country;