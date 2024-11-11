import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>


      <img src="/logo.svg" alt="Logo" />


      <div>

        <Button>Sign in</Button>

      </div>
    </div>
  )
}

export default Header;