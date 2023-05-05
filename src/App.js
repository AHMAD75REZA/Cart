
// import './App.css';
import React from 'react';
import CartItem from './CartItem';


function App() {

function showAlert(){
  alert("Hello!");
}

function handleInputchange(e){
  console.log(e.target.value);
}
  return (
    <div className="App">
      <CartItem />
     <button onClick={showAlert}> show Alert</button>

     <input onChange={handleInputchange}/>
    </div>
  );
}

export default App;
