import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



const myProducts=[
  {
    productName:"Dextop111",
    productPrice:129303
  },
  {
    productName:"Laptop",
    productPrice:181981
  },
  {
    productName:"Tablet",
    productPrice:14940
  },
  {
    productName:"Phone",
    productPrice:14440
  },
  {
    productName:"Watch",
    productPrice:2000
  }
]
function App() {
 
  return (
    <div className="App">
     
      {/* <Product name="laptop" price="19000"></Product>  */}
      {/* {
        myProducts.map(myProduct=> <Product name={myProduct.productName} price={myProduct.productPrice}></Product>)
      } */}
    
     <Counter></Counter>
     <UseStateFunction></UseStateFunction>

    </div>
  );
}


function UseStateFunction()
{
  const[users,setUsers]=useState([]);
  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>setUsers(res))},[]);
  return(
    <div><h1>External user</h1>
    <p>
      {
        users.map(user=><UserForUseState name={user.name} email={user.email}></UserForUseState>)
      }
      
      </p></div>
  )

}
function UserForUseState(props)
{
  return(
    <div style={{color:"Blue",margin:"10px",padding:"10px",border:"2px solid black",borderRadius:"10px",backgroundColor:"lightpink"}}>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
     
    </div>
  )
}



function Counter()
{
  const [count,setCount]=useState(0);

//  const increaseCount=()=>
//  {
//   const newCount=count+1;
//   setCount(newCount);
//  }

const increaseCount=()=>setCount(count+1);

 const decreaseCount=()=>
 {
  const newCount1=count-1;
  setCount(newCount1);
 }

  return(
    <div><h4>Count: {count} </h4>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    </div>
    
    
  )
}



function Product(props)
{
  return(
      <div className='product'>
        <h3>Name: {props.name}</h3>
        <p>Price: {props.price}</p>
      </div>
  )
}


export default App;
