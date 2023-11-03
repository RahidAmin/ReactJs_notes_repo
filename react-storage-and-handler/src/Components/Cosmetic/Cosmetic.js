import React from 'react';
import { addToDb } from '../Utilities/fakeDB';

const Cosmetic = (props) => {
   const {pName,price,id}=props.cosmetic;

   const addToCart=(id)=>
   {
    // localStorage.setItem(id,1); 
    addToDb(id);
   }
//    const addToCartWithParameter=()=>
//    {
//     addToCart(id);
//    }

    return (
        <div style={{margin:"20px",border:"2px solid lightPink",borderRadius:"10px"}}>
            <h3>Buy This:{pName}</h3>
            <h4>Price:{price}</h4>
            <h5>ID:{id}</h5>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;