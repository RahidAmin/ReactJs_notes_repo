import Country from './Component/Country/Country';
import React, { useEffect, useState } from 'react';
import './Country1.css';

const Country1 = () => {
    const[countries,SetCountries]=useState([]);
  
    useEffect(()=>
    {
      fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((res)=>
      {
        SetCountries(res);
      })
    },[])
  
    return(
      <div>
        <h1>Visiting every country of the world.. </h1>
        <h3>Available Countries:{countries.length} </h3>
        {
          countries.map(c=>console.log(c))
        }
       <div className='countries-container'>
       {
          countries.map(country=> <Country country2={country}
             name={country.name.common}
             population={country.population}
            //  region={country.region}
            //  area={country.area}
            key={country.cca3}
             ></Country>)
        }
       </div>
        
      </div>
    )
};

export default Country1;