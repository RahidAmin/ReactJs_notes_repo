import React, { useState } from 'react';


const Watch = () => {
    const[steps,SetSteps]= useState(1);
    
    const IncreaseSteps=()=>
    {
        const newStep=steps+1;
        SetSteps(newStep);
    }
    
  
   
    return (
         
        <div>
               <h1>Number:{steps}</h1>
               <button onClick={IncreaseSteps}>Click</button>
            
        </div>
    );
};

export default Watch;