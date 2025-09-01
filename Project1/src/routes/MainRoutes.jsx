import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Recipe from '../pages/Recipe';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/recipes' element={<Recipe />}/>
        <Route path='/recipes/details/:id' element={<SingleRecipe />}/>
        <Route path='/create-recipe' element={<Create />}/>
    </Routes>
  )
}

export default MainRoutes