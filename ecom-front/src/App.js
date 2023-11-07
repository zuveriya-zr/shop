import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <Routes>
        
        <Route  path='/login' element={<Login/>} />
        <Route path ='/cart' element={<Cart />} />
        <Route exact path='/' element={<Home/>} />
        
      </Routes>
    </div>
  );
}

export default App;


//heroicon install
//tailwind css config