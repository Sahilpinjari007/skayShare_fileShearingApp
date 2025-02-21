import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function Login() {
  return <SignIn forceRedirectUrl={"/upload"} signUpUrl={'/auth/register'}/>
}

export default Login