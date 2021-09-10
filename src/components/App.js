import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [currentPizza, setCurrentPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(response => response.json())
    .then(setPizzas)
  }, [])
  
  function handleEdit (pizza) {
    setCurrentPizza(pizza);
  }

  function pizzaPost(){
    console.log("Posted Pizza", formData)
  }

  function pizzaPatch() {
    console.log("Patched Pizza", formData)
  }


  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} pizzaPost={pizzaPost} pizzaPatch={pizzaPatch} />
      <PizzaList pizzas={pizzas} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
