import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

useState
export const GifExpertApp2 = () => {
  
  const [categories, setCategories] = useState(['Metallica','Megadeth']);
  
  const onAddCategory = () => {
    setCategories(['Slayer',...categories])
  };

  return (

    <> 

    <h1>GifExpertApp2</h1>
    <AddCategory/>
    

    <ol>
      {
          categories.map(category => {
            return(
              <li key={category}>{category}</li>
            )
          })
      }
    </ol>

    <button onClick={onAddCategory}>
      Agregar Categoria
    </button>
    

    </>
    
  )
};

