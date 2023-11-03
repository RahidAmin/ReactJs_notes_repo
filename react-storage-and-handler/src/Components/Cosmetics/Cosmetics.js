import React, { useEffect, useState } from 'react';
import { addition, substraction } from '../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import addition from '../Utilities/calculate';

const Cosmetics = () => {
    // const first=19;
    // const second=20;
    // const add=addition(first,second);
    // const subs=substraction(first,second);

    //    const cosmetics=[
    //     {id:1,pName:"palish",price:100},
    //     {id:2,pName:"balish",price:200},
    //     {id:3,pName:"nalish",price:300},
    //     {id:4,pName:"alish",price:400},
    //     {id:5,pName:"galish",price:500} 
    //    ]


    // const cosmetics=[
        
    //         {
    //           "id": "65446cbcd25b79eea033738b",
    //           "price": 1743,
    //           "pName": "Sarah Wilkins"
    //         },
    //         {
    //           "id": "65446cbcb7744689b8c9a523",
    //           "price": 1174,
    //           "pName": "Chandler Rodriguez"
    //         },
    //         {
    //           "id": "65446cbca699bcdd0375ddb3",
    //           "price": 4195,
    //           "pName": "Randolph Hernandez"
    //         },
    //         {
    //           "id": "65446cbcdf9517c33583b03a",
    //           "price": 1266,
    //           "pName": "Fanny Buckley"
    //         },
    //         {
    //           "id": "65446cbcf3942bac125e66c2",
    //           "price": 2516,
    //           "pName": "Mcguire Guerra"
    //         },
    //         {
    //           "id": "65446cbc99c23293d63dcc0b",
    //           "price": 3483,
    //           "pName": "Raquel Bauer"
    //         },
    //         {
    //           "id": "65446cbcd6752b140de63b81",
    //           "price": 3498,
    //           "pName": "Guerrero Foreman"
    //         }
    //       ]

    const [cosmetics,SetCosmetics]=useState([]);

    useEffect(()=>
    {
        fetch("data.json").then((res)=>res.json()).then((res)=>
        {
            SetCosmetics(res);
        })
    },[])
    

    return (
        <div>
            {/* <h3>Welcome to my cosmetic store</h3>
            <p>Summation:{add}</p>
            <p>Substraction:{subs}</p> */}

            {
                cosmetics.map(cos=><Cosmetic key={cos.id} cosmetic={cos}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;<h3>Welcome to my cosmetic store</h3>