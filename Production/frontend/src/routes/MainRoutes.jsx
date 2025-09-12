import { Route, Routes} from 'react-router';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Products from '../../pages/Products';
import CreateProduct from '../../pages/product/CreateProduct';
import ProductDetails from '../../pages/product/ProductDetails';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/admin/create-product' element={<CreateProduct />}/>
    </Routes>
  )
}

export default Mainroutes