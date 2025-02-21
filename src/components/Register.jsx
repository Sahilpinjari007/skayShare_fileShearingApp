import { SignUp } from "@clerk/clerk-react";
import React from "react";

function Register() {
  return (
    <SignUp forceRedirectUrl={"/upload"} signInUrl="/auth/login"/>
  );
}

export default Register;
