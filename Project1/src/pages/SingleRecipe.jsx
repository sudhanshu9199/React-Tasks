import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import { useParams } from 'react-router';
import style from '../styles/SingleRecipe.module.scss';
import { useForm } from 'react-hook-form';

const SingleRecipe = () => {
    const { data } = useContext(recipeContext);
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id)
    console.log(recipe);
        const {register, handleSubmit, reset } = useForm();
    
        const SubmitHandler = (recipe) => {
        }
    
    // console.log(data, params.id);
    
  return recipe ? <div className={style.container}>
    <div>
        <h1>{recipe.title}</h1>
    <img src={recipe.image} alt="" />
    </div>

    <form onSubmit={handleSubmit(SubmitHandler)}>
                <input {...register('image')} type='url' placeholder='Enter image url' value={recipe.image}/> <br />
                <small className={style.errorMessage}>this is how error is shown</small> <br />
    
                <input {...register('title')} type="text" placeholder='Recipe title' value={recipe.title}/>
                <input {...register('chef')} type="text" placeholder='Chef Name'value={recipe.chef}/> <br />
    
                <textarea {...register('desc')} placeholder='Recipe' value={recipe.desc}></textarea>
                <textarea {...register('ingredients')} placeholder='add ingredients' value={recipe.ingredients}></textarea> <br />
                <select {...register('category')} value={recipe.category}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select> <br />
                <button>Update</button>
                <button className={style.delete}>Delete</button>
            </form>
  </div> : "Loading...";
}

export default SingleRecipe