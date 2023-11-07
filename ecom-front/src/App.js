import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Cart from './pages/Cart';
import Header from './component/nav/Header';
import RegVerified from './auth/RegVerified';

function App() {
  return (
    <div >
      <Header />
      <Routes>
      <Route  path='/reg-verified' element={<RegVerified/>} />
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