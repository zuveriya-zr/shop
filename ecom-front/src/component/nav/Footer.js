import React from 'react'
import {Button, Typography} from '@material-tailwind/react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
  <div className='min-h-100 d-flex flex-col w-full'>
    <footer className='mt-auto'>
    <div className='row  px-6 py-4 h-auto bg-gray-200'>
<span className='col-md-3'>
<Typography className='text-xl font-bold text-black mb-2'>
Ecom-Shop
</Typography>
<Typography className='text-black/70 w-40 text-sm'>
  (  One Stop Shopping point for all needs )
</Typography>
</span>
<div className='col-md-1' />
<span className='col-md-2 text-black/75'>
    <ul>
        <Link to='/new-arrival'><li className='cursor-pointer hover:text-red-500 hover:font-bold'>New Arrival</li></Link>
        <Link to='/best-seller'><li className='cursor-pointer hover:text-red-500 hover:font-bold'>Best Seller</li></Link>
        <Link to='/laptop'> <li className='cursor-pointer hover:text-red-500 hover:font-bold'>Laptop</li></Link>
        <Link to='/mobile'> <li className='cursor-pointer hover:text-red-500 hover:font-bold'>Mobile</li></Link>
        <Link to='/cloths'> <li className='cursor-pointer hover:text-red-500 hover:font-bold'>Cloths</li></Link>
    </ul>
</span>
<span className='col-md-2 text-black/75'>
    <ul>
        <li className='cursor-pointer hover:text-red-500 hover:font-bold'>Shop</li>
        <li className='cursor-pointer hover:text-red-500 hover:font-bold'>About US</li>
        <li className='cursor-pointer hover:text-red-500 hover:font-bold'>T & C</li>
        <li className='cursor-pointer hover:text-red-500 hover:font-bold'>Contact</li>
    </ul>
</span>
<div className='col-md-1' />
<span className='col-md-3  space-x-3 text-black/75'>
    <p className='text-xl font-bold text-center mb-2'> Reach out to us Here </p>
 <Button size='sm' color='orange'>Insta</Button>
 <Button size='sm' color='blue' >Facebook</Button>
 <Button size='sm' color='red' >Mail</Button>
</span>
    </div>
    <div className='bg-black text-white p-2 text-center'> 
    <Typography>Copyrights &copy; Reservered :  Ecom-shop 2023 </Typography>
    </div>
    </footer>
  </div>
  )
}

export default Footer