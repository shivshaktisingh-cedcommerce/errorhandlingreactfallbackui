import React from 'react'
import Component1 from "./Component1.js"
import {useState} from 'react'
import ErrorUi from "./ErrorUi"
var x;
function App() {
  const[randomnum , setRandomnum]=useState(()=>
  {return null})

const generate_fun=()=>{
     x = Math.floor(Math.random()*20)
    setRandomnum(x)
}
  return (
    <div className="App">
      <ErrorUi>
       <Component1 generate_fun={generate_fun} randomnum={randomnum}/>
      </ErrorUi>
     
    </div>
  );
}

export default App;
