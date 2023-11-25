import React, {useEffect} from 'react';
import {  Card,  CardBody} from "@material-tailwind/react";
import LogForm from './LogForm';
import RegForm from './RegForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import {toast} from 'react-toastify'
const Login = () => {
  const {user}=useSelector((state) => ({...state}))
const navigate= useNavigate();
//handle all the changes happening inside app
useEffect(() =>{
if(user && user.token) {
  navigate('/')
  toast.info('you have already logged in')
}
},[user])

 
  return (
    <div className="d-flex justify-evenly bg-gray-100 py-4 h-full  w-full items-center">
      
      <div className='mx-auto'>
      <p className='text-center text-xl font-bold my-2'>Login</p>
      <Card className=" w-[300px] shadow-xl sm:w-[350px] md:w-[450px] mx-auto">
        <CardBody>
         <LogForm />
        </CardBody>
      </Card>
      </div>
      <p className='text-md font-bold'>(OR)</p>
      <div className='mx-auto'>
      <p className='text-center text-xl font-bold my-2'>Register</p>
      <Card className=" w-[300px] shadow-xl sm:w-[350px] md:w-[450px] mx-auto">
        <CardBody>
         <RegForm />
        </CardBody>
      </Card>
      </div>
    </div>
  )
}

export default Login