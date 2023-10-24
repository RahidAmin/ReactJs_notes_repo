import React from 'react';

import './Country.css'

const Country = (props) => {


  // destructuring in react
   
  const{area,flags}=props.country2;
    
    return(
        <div className='countryClass'>
          <h3>Name: {props.name}</h3>
          <img src={flags.png} alt="" />
          <h4>Population:{props.population}</h4>
          <h4>Region:{props.country2.region}</h4>
          
          <h5>Area:{area}</h5>
         
          
        </div>
      )
};

export default Country;