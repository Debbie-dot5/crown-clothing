import React from 'react'
import { signInwithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase'


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>
      <h1>Sign in page</h1>
      <button className='border border-black bg-gray-500 ' onClick={logGoogleUser}>Sign in with pop up</button>
    </div>
  )
}

export default SignIn
