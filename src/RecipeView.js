import React from "react";
import "./RecipeView.css"

function RecipeView({ recipe, index, deleteRecipe }) {
    

    if(recipe){  

            return (
                 <tr key={index}>
                     <td>{recipe.name}</td>
 
                     <td>{recipe.cuisine}</td>

                     <td className="scale-down"><img src={recipe.photo} alt={recipe.name} /></td>             

                     <td className="content_td"><p>{recipe.ingredients}</p></td>

                     <td className="content_td"><p>{recipe.preparation}</p></td>
        
                     <td>
                        <button name="delete" onClick={()=> deleteRecipe(index)}>Delete</button>
                     </td>
                  </tr>
                   );
    }
    else{
        return null;
    }


  }
  
  
  export default RecipeView;