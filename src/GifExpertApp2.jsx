import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp2 = () => {
  
  const [categories, setCategories] = useState(['Metallica','Megadeth']);
  


  const onAddCategory = (newCategory) => {
   
    if(categories.map(lastCategorie => 
      lastCategorie.toLowerCase())
      .includes(newCategory.toLowerCase()))return;
      setCategories([newCategory,...categories])
      //Código para agregar categorias únicas
  };

  return (

    <> 

    <h1>GifExpertApp2</h1>
    <AddCategory 
      onNewCategory = { newCategoryInput => onAddCategory(newCategoryInput)}
    />
    

  
      {
          categories.map(category => 
            (
              <GifGrid key={category} 
              category={category}/>
            )
          )
      }
    

    <button onClick={onAddCategory}>
      Agregar Categoria
    </button>
    

    </>
    
  )
};

