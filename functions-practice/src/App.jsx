import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [count, setcount] = useState(0)
  const [lastclicked, setlastclicked] = useState('not clicked yet')
  const counter=(elem)=>{
    console.log(elem);
    if(elem=='plus'){
        setcount(count+1)
        setlastclicked('plus')
    }else{
        setcount(count-1)
        setlastclicked('minus')
    }
  }

  return (
    <div>
     <h1>My Counter</h1>
     <h2>{count}</h2>
     <div>
          <button data-action="plus" onClick={function(elem){
            counter(elem.target.dataset.action);
          }}>[+]</button>
          <button data-action="minus" onClick={function(elem){
            counter(elem.target.dataset.action);
          }}>[-]</button>
          
     </div>
     <h4>Last action : {lastclicked}</h4>
     <input onChange={function(elem){
      console.log(elem.target.value)
     }}></input>
     
    </div>
  )
}

export default App
