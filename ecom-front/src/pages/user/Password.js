import React, {useState} from 'react'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Button, Input, Typography } from '@material-tailwind/react'
const Password = () => {
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)
const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    await auth.currentUser.updatePassword(password)
    .then(()=>{
        setLoading(false)
        toast.success("Password Updated Successfuly..!!")
    })
    .catch((err )=>{
        setLoading(false)
        console.log("Error in password update===>",err)
    })
}



  return (
    <div>
        <form onSubmit={handleSubmit} className="w-[300px] shadow-xl sm:w-[350px] md:w-[450px] px-3 mx-auto ">
    <Typography
      variant="small"
      color="blue-gray"
      className="mb-4 font-medium"
    >
      Password
    </Typography>
    <Input
    
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type={passwordType}
      label="Enter Your Password"
      icon={
        <>
          {passwordType === "password" ? (
            <EyeIcon
              className="cursor-pointer"
              onClick={togglePassword}
            />
          ) : (
            <EyeSlashIcon
              className="cursor-pointer"
              onClick={togglePassword}
            />
          )}
        </>
      }
    />
     <Button
              className=" my-2 flex text-center mx-auto  group"
              size="sm" 
              disabled={ !password}
              type='submit'
            >
              Update 
            
            </Button>
            </form>
  </div>
  )
}

export default Password