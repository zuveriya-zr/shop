import React, {  useState } from "react";

import {
  Input,
  Button,
  Typography
} from "@material-tailwind/react";
import {  CheckBadgeIcon,  EnvelopeIcon } from "@heroicons/react/24/solid";
function RegForm() {
  const [email, setEmail] = useState("");
  


  return (
    <div value="signup" className="p-3 h-auto">
      <form className="mt-2 flex flex-col gap-4" >
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Enter Your Email To Verify
          </Typography>
          <Input autoFocus  type="email" label="Email Address" />
        </div>
        <Typography  className="flex text-sm text-red-200">
          By Signing up you agree with our Terms And Condition
        </Typography>
        

        <Button disabled={!email} size="lg" type="submit" color="amber" className="relative flex justify-center group h-12">
          Verify &nbsp; <CheckBadgeIcon className="h-5 w-5 text-amber-500 transition-all duration-700 group-hover:text-black ease-in"  />
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
}

export default RegForm;
