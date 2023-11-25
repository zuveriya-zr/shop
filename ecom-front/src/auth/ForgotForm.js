import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { Button, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { UseSelector } from 'react-redux'
import {toast} from 'react-toastify'
const ForgotForm = () => {
const [email,setEmail]= useState("")
const [loading, setLoading] = useState(false)




const handleSubmit =async (e) =>{
 
    e.preventDefault();
    //firebase redirect config
    const config = {
        url:process.env.REACT_APP_FORGOT_REDIRECT,
        handleCodeInApp: true,
      };
      //send password reset link to the verified email
await auth.sendPasswordResetEmail(email,config)

.then(() =>{
    setEmail("");
setLoading(false);
toast.success(`Password Reset Link is sent to ${email}`)
})

.catch((error) =>{
    setLoading(false)
    console.log("error in forgot verification",error)
    toast.error(error.message)
})



}
  return (
    <div value="forgot" className="p-3 h-auto">
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
      <div>
        {loading ? (<p className='text-danger '>Loading....</p>) : null}
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-4 font-medium"
        >
          Provide Email To Reset your Password
        </Typography>
        <Input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
        />
      </div>
      <Typography className="flex text-sm text-gray-400">
        Password reset link will be sent to your email
      </Typography>

      <Button
        disabled={!email}
        size="lg"
        type="submit"
        color="amber"
        className="relative flex justify-center group h-12"
      >
        Send Reset Link
        <CheckBadgeIcon className="h-5 w-5 text-amber-500 transition-all duration-700 group-hover:text-black ease-in" />
      </Button>
   
    </form>
  </div>
  )
}

export default ForgotForm