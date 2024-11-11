import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>

      <a href='/'>
        <div className='flex justify-center items-center gap-2'>
        <img src="/logo.svg" alt="Logo" />
        <h2 className='text-2xl'>Travel Genie</h2>
        </div>
      </a>

      <div>

        <Button>Sign in</Button>

      </div>
    </div>
  )
}

export default Header;