
// // import './App.css';
// import React from 'react';
// import CartItem from './CartItem';


// function App() {

// function showAlert(){
//   alert("Hello!");
// }

// function handleInputchange(e){
//   console.log(e.target.value);
// }
//   return (
//     <div className="App">
//       <CartItem />
//      <button onClick={showAlert}> show Alert</button>

//      <input onChange={handleInputchange}/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([
    {
      price: 99,
      title: "Watch",
      qty: 1
    }
  ]);

  const handleIncreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const index = products.indexOf(product);
    const newProducts = [...products];
    newProducts[index].qty += 1;
    setProducts(newProducts);
  };

  const handleDecreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    const newProducts = [...products];
    newProducts[index].qty -= 1;
    setProducts(newProducts);
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <Cart
        products={products}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

export default App;

