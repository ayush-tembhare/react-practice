import React from 'react'
import './App.css'


const App = () => {
  const counter=(elem)=>{
        console.log(elem);
  }
  return (
    <div>
     <h1>My Counter</h1>
     <h2>0</h2>
     <div>
          <button data-action="plus" onClick={function(elem){
            counter(elem.target.dataset.action);
          }}>[+]</button>
          <button data-action="minus" onClick={function(elem){
            counter(elem.target.dataset.action);
          }}>[-]</button>
           <button onClick={function(elem){
            console.log("test is clicked ")
          }}>[test]</button>
     </div>
     <h4>Last action : None</h4>
     <input onChange={function(elem){
      console.log(elem.target.value)
     }}></input>
     
    </div>
  )
}

export default App
