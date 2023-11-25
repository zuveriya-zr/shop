import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import {
  EyeSlashIcon,
  EyeIcon,
  ShieldCheckIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { auth,googleAuthProvider } from "../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ForgotForm from "./ForgotForm";
import { createUpdateUser } from "../functions/auth-f";


function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

const roleBasedRedirect = (res)=>{
if(res.data.role === 'admin' ){
  navigate('/admin-dash')
}else{
  navigate('/user-dash')
}

}



  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log("result===>", result);
//destruction the data from result
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
// createUpdateUser(authtoken)
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
            // function call to check user roles
          roleBasedRedirect(res)
        }
      )
      .catch((err) => console.log('error in backend response ===> ',err))

    
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.log("Error in login ==>", err);
      toast.error(err.message);
    }
  };
//we need to handle google auth login
const googleAuth =async () => {
  //google auth will be done 
auth.signInWithPopup(googleAuthProvider)
.then(async(result) => {
//destruction the data from result
const { user } = result;
const idTokenResult = await user.getIdTokenResult();
// createUpdateUser(authtoken)
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
// console.log(result)
})
.catch((err) =>{
  console.log("google auth error ===>",err)
  toast.error(err.message)
})
}



  return (
    <div value="login" className="p-3 h-auto">
      {show ? (
        <>
          <ForgotForm />
          <p
            onClick={() => setShow(!show)}
            className=" flex text-md my-1 text-green-500 cursor-pointer decoration hover:text-gray-800 hover:underline items-center justify-end font-bold opacity-60"
          >
            Remember Password
          </p>
        </>
      ) : (
        <>
          {/* <Spin tip="Please Wait..." spinning={loading}> */}
          <form className="mt-2 flex flex-col gap-4 ">
            {loading ? (
              <p className="text-red-500 text-center font-bold text-lg">
                Loading.....
              </p>
            ) : null}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-medium"
              >
                Email
              </Typography>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
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
            </div>
            <p
              onClick={() => setShow(!show)}
              className=" flex text-xs text-red-700 cursor-pointer decoration  hover:underline items-center justify-end font-medium opacity-60"
            >
              Forgot Password..?
            </p>
            <Button
              className="flex justify-center  group"
              // checked={loading}
              size="lg"
              disabled={!email || !password}
              onClick={handleLogin}
            >
              Login &nbsp;
              <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 transition-all duration-700 group-hover:text-white ease-in" />
            </Button>
            <Button
              className="flex justify-center bg-blue-500 group"
              // checked={loading}
              size="lg"
              onClick={googleAuth}
            >
              Google Login &nbsp;
              <ArrowRightCircleIcon className="h-5 w-5 text-white transition-all duration-700 group-hover:text-white ease-in" />
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
            >
              <ShieldCheckIcon className="-mt-0.5 h-4 w-4" /> Your Credentials
              are Secured & Encrypted
            </Typography>
          </form>
          {/* </Spin> */}
        </>
      )}
    </div>
  );
}

export default LogForm;
