import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const LoadingRedirect = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()

    useEffect(() =>{
const interval = setInterval(() => {
  //5 ==> 4 ==> 3 ==>2 ==>1 ==>0 
    setCount((currentCount => -- currentCount))
},1000)
    
// redirect user once timer stop
if(count===0) {
    navigate('/')
     toast.error("Access Denied")
}
//cleaning the state of count
return() => clearInterval(interval)
},[count,navigate])




  return (
    <div className='w-[200px] justify-center mx-auto bg-red-100 p-2'>
        <p className='font-bold'> Redirecting You in  {count} Seconds. </p> 
    </div>
  )
}

export default LoadingRedirect