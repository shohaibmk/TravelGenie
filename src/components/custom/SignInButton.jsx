import React  from 'react'
import { Button } from '../ui/button';

function  SignInButton()  {

    return (
        <div className='p-4 shadow-sm flex justify-between items-center'>

        <a href='/'>
          <div className='flex justify-center items-center gap-2'>
            <img src="/logo.svg" alt="Logo" />
            <h2 className='text-2xl'>Travel Genie</h2>
          </div>
        </a>
  
        <div>
  
          <Button onClick={LogIn} >Sign in</Button>
  
        </div>
      </div>
    )
  
}


export default SignInButton;