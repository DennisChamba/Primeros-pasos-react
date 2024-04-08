import React, { useState } from "react";
import { AddCategory, GitGrid } from "./components";

export const GIFExpertApp = () => {
  
  const [categories, setCategories] = useState(['one piece'])

  //Esta funcion se enviara en lugar de la setCategories para agregar un poco mas de logica 
  //dentro de la misma clase
  const onAddCategory = (newCategory) =>{
    setCategories((categories) => {
      
      return  ( !categories.includes(newCategory) )? [newCategory, ...categories]: categories
    
    })
    
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
       
      {/* Input */}
      <AddCategory  
        onNewCategory = {onAddCategory}  // onNewCategory = {(event) => onAddCategory(event)}
      />

      {/* Galeria de gifs */}
      
        {categories.map( (category )=> { 

          return <GitGrid 
            key={category} 
            category={category}
            /> //para cada categoria en la lista vamos a crear el componete gifgrid

        })}
      

      {/* <button onClick={onAddCategory}>Agregar categoria</button>   */}

        {/* Gif */}

    </>
  );
};
