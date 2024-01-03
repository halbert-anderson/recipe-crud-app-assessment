import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({createRecipe}) {

//defining the initial state of each form element
const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  preparation: "",
  ingredients: "",
};

// set state of all elements of the form 
const [formData, setFormData] = useState({ ...initialFormState });

/*
// set state of each individual form element
const [name, setName]=useState("");
const [cuisine, setCuisine]=useState("");
const [photo, setPhoto]=useState("");
const [preparation, setPreparation]=useState("");
const [ingredients, setIngredients]=useState("");
*/

// TODO: Add the required submit and change handlers
// define how to handle changes of form elements
const handleFormChange = ({ target }) => {
        setFormData({
            ...formData,
              [target.name]: target.value,
        });

      };

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
const handleSubmit = (event) => {

      // prevent default behavior of button  when clicked 
      event.preventDefault();
   
      // create a new recipe 
      createRecipe(formData);
    
      // reset form to initial state
      setFormData({ ...initialFormState });

    };

  
  // TODO: Add the required input and textarea form elements.
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>

            <td> 
                
                 <input 
                   id="name" 
                   name="name" 
                   type="text" 
                   required={true} 
                   placeholder="Name" 
                   onChange={handleFormChange} 
                   value={formData.name}
                 />
                 
            </td>

            <td>
               
                 <input 
                   id="cuisine" 
                   name="cuisine" 
                   type="text" 
                   required={true} 
                   placeholder="Cuisine" 
                   onChange={handleFormChange}
                   value={formData.cuisine} 
                 />
                 
            </td>

            <td>
                  
                 <input 
                   id="photo" 
                   name="photo" 
                   type="url" 
                   required={true} 
                   placeholder="Photo" 
                   onChange={handleFormChange}
                   value={formData.photo}
                 />
                   
            </td>

            <td>
                   
                   <textarea 
                     id="ingredients" 
                     name="ingredients" 
                     required={true} 
                     rows={1} 
                     placeholder="Ingredients" 
                     onChange={handleFormChange} 
                     value={formData.ingredients} 
                   />
                  
            </td>

            <td>
                   
                 <textarea 
                   id="preparation" 
                   name="preparation" 
                   required={true} 
                   rows={1} 
                   placeholder="Preparation" 
                   onChange={handleFormChange}
                   value={formData.preparation} 
                 />
                 
            </td>

           

            <td>
                 
                 <button type="submit" onSubmit={handleSubmit}>Create Recipe</button>
                  
            </td>

          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
