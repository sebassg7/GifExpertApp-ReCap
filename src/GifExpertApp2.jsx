import { useState } from "react";

useState
export const GifExpertApp2 = () => {
  
  const [categories, setCategories] = useState(['Metallica','Megadeth']);
  
  return (

    <> 

    <h1>GifExpertApp2</h1>

    <ol>
      {
          categories.map(category => {
            return(
              <li key={category}>{category}</li>
            )
          })
      }
    </ol>

    </>
    
  )
};

