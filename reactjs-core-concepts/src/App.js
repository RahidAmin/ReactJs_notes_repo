import logo from './logo.svg';
import './App.css';


const number=19;

let players=[{
  pName: "Cristiano",
  pGame:"Football"
},
{
   pName:"Khabib",
   pGame:"UFC"
},
{
  pName:"Sakib"
  ,
  pGame:"Cricket"
},
{
  pName:"Ronaldo",
  pGame:"Football"
},
{
  pName:"Rodttang",
  pGame:"UFC"
}
]

let singer={
  sname:"mahfujur",
  sage:59
}
const singerStyle=
{
  backgroundColor:"green"
}


function App() {
  const names=["rahid","amin","mujibul","haque"];
  return (
           <div className="App">
            {/* {
              names.map(myname=><Person name={myname}></Person>)
            } */}
            {
              players.map(player=><Person name={player.pName}></Person>)
            }
      
          <p>Number is:{number+1}</p>
          <h3>Music</h3>
          <p style={singerStyle}>{singer.sname}:{singer.sage}</p>
          <p style={{color:"pink",backgroundColor:"red"}}>{singer.sname}</p>
          <hr />
          
          <div className='person1'>  
             <div>Item:1</div>
             <div>Item:2</div>
             <div>Item:3</div>
             <div>Item:4</div>
             <div>Item:5</div>
              </div><br/>
              <br /><br /><br /><br /><br /><br /> 
          <hr />
           {/* <Person name={names[0]} naika="Mithila"></Person>
          <Person name={names[1]} naika="Arabi"></Person>
          <Person name={names[2]} naika="jannat"></Person>
          <Person name={names[3]} naika="sadiya"></Person>
          <Person naika="Tonu"></Person> */}
              
          {/* reactjs */}
      
    </div>
  );
}



function Person(props)
{
  console.log(props);
  return (<div className='person'><h4>Name:{props.name}</h4>
  <p>This is a paragraph(Naika={props.naika})</p></div>);
}



export default App;
