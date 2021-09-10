import React, { useState } from "react";

function PizzaForm({currentPizza, pizzaPatch, pizzaPost}) {
  const blankForm = {
    topping: "", 
    size: "", 
    vegetarian: true
  };
  const [isEdit, setIsEdit] = useState(false)
  const [formData, setFormData] = useState(blankForm);

  if (currentPizza && isEdit === false) {
    setIsEdit(true)
    setFormData({
      topping: currentPizza.topping, 
      size: currentPizza.size,
      vegetarian: currentPizza.vegetarian
    });
  }

  function handleFormChange (e) {
    setIsEdit(true)
    const name = e.target.name;
    let value = "";
    if(e.target.type === "radio"){
      value = e.target.value === "Vegetarian" ? true : false ;
    } else {
      value = e.target.value;
    }
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    if(formData.topping === currentPizza.topping){
      pizzaPatch(formData)
    } else {pizzaPost(formData)}
    setIsEdit(false);
    setFormData(blankForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select 
          className="form-control" 
          name="size"
          value={formData.size}
          onChange={handleFormChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!formData.vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
