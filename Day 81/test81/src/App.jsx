import Create from './components/Create';
import Home from './components/Home';
import Product from './components/Product';
import Read from './components/Read';
import { Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import About from './components/About';
import Nav from './components/Nav';
const App = () => {

  return (
    <div className='w-screen h-screen bg-amber-700'>
      <Create />
      <Read />
      <Nav />
      <Routes >
        <Route path='/' element= {<Home />}/>
        <Route path='/product' element= {<Product />}/>
        <Route path='/service' element= {<Service />}/>
        <Route path='/about' element= {<About />}/>
      </Routes>

    </div>
  )
}

export default App