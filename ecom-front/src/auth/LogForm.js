import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import {
  EyeSlashIcon,
  EyeIcon,
  ShieldCheckIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const [show, setShow] = useState(false);
 
 
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
 

  return (
    <div value="login" className="p-3 h-auto">
      {show ? (
        <>
        <h1> Forget Password Form Will Be showing Here </h1>
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
            <form className="mt-2 flex flex-col gap-4 " >
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-4 font-medium"
                >
                  Email
                </Typography>
                <Input
                
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
                type="submit"
                disabled={!email || !password}
              >
                Login &nbsp;{" "}
                <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 transition-all duration-700 group-hover:text-white ease-in" />
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
