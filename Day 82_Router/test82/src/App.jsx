import React from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
import './index.css';
const App = () => {
  return (
    <div className='w-screen h-screen bg-cyan-900 text-cyan-50 p-8'>
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App