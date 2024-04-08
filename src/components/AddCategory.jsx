import React, { useState } from "react";


export const AddCategory = ({ onNewCategory })=>{ //como propp tenemos la funcion para agregar una nueva categorias
  const [InputValue, setInputValue] = useState("") //encargado del cuadro de busqueda

  const onInputChange = (event) =>{
    //console.log(event.target.value); // veras como cambia el valor al ritmo que se ingresa
    setInputValue(event.target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    setInputValue("") 
    onNewCategory(InputValue) //usamos el valor de input para mandarlo como argumento
                              //de la funcion que nos mandan de prop
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifts" 
        onChange={onInputChange}  //(event) => onInputChange(event)
        value={InputValue}
      />
    </form>
    
  )
}
