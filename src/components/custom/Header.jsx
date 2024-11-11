import React from 'react'
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <img src='/logo.svg'/>
        <div>
            <Button>Sign in</Button>
        </div>
    </div>
  )
}

export default Header;