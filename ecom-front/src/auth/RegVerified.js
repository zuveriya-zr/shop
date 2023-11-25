import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {  CheckBadgeIcon,  EnvelopeIcon,  EyeIcon,  EyeSlashIcon,} from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createUpdateUser } from "../functions/auth-f";




const RegVerified = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
let dispatch = useDispatch()
  const {user}=useSelector((state) => ({...state}))
  
  const roleBasedRedirect = (res)=>{
    if(res.data.role === 'admin' ){
      navigate('/admin-dash')
    }else{
      navigate('/user-dash')
    }
    
    }

  useEffect(() =>{
  if(user && user.token) {
    navigate('/')
    toast.info('you have already Verified your Email')
  }
  },[user])
  
  useEffect(() => {
    setEmail(window.localStorage.getItem("userEmail"));
  }, []);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log("RESULT===>", result);

      if (result.user.emailVerified) {
        //remove email from local storage
        window.localStorage.removeItem("userEmail");

        //get the user id token
        let user = auth.currentUser;

        await user.updatePassword(password);

        const idTokenResult = await user.getIdTokenResult();

//function call createUpdateUser(authtoken)
createUpdateUser(idTokenResult.token)
.then(
  (res) => {
    // console.log('Backend Response ====>' , res)
    dispatch({
      type: "LOGIN",
      payload: {
        _id:res.data._id,
        name:res.data.name,
        email: res.data.email,
        role:res.data.role,
        token: idTokenResult.token,
      },
    });
    roleBasedRedirect(res)
  }
)
.catch((err) => console.log('error in backend response ===> ',err))


navigate("/");

        // console.log(      "registered user===>",          user,          "id token ===>",          idTokenResult        );
        
      }
    } catch (error) {
      console.log("ERROR ===>>>", error);
      
    }
    
  };

  return (
    <div className="w-[300px] shadow-xl sm:w-[350px] md:w-[450px] mx-auto">
      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Enter Your Email To Verify
          </Typography>
          <Input
            autoFocus
            type="email"
            value={email}
            disabled
            label="Email Address"
          />
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Password
          </Typography>
          <Input
            type={passwordType}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
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
        </div>
        <Typography className="flex text-sm text-red-200">
          By Signing up you agree with our Terms And Condition
        </Typography>

        <Button
          disabled={!email}
          size="lg"
          type="submit"
          color="amber"
          className="relative flex justify-center group h-12"
        >
          Signup &nbsp;{" "}
          <CheckBadgeIcon className="h-5 w-5 text-amber-500 transition-all duration-700 group-hover:text-black ease-in" />
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
        >
          <EnvelopeIcon className="-mt-0.5 h-4 w-4" /> Verification email will
          be sent to your inbox
        </Typography>
      </form>
    </div>
  );
};

export default RegVerified;
