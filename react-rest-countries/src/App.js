import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Country1 from './Component/Country1/Country1';

import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Country1></Country1>
  
     {/* <Person1></Person1> */}

     
      {/* <LoadCountries></LoadCountries> */}


    </div>
  );
}



// function LoadCountries()
// {
 
// }
// function Country(props)
// {
  
// }

export default App;
