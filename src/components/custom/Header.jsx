import React, { useState,useEffect } from 'react'
import SignInButton from './SignInButton';


function Header() {

  const [loggedIn, setLoggedin] = useState(false);




  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user){
      console.log('user already logged in');
      return;
    }
    else{
      console.log('user needs to log in');
    }

}, [loggedIn])




  const LogIn = () => {
    
    if(!loggedIn){
      console.log('button lcicked User not logged in');
      localStorage.setItem('user',true);
      setLoggedin(true);

    }
  }

  return (


   <SignInButton/>
  )
}

export default Header;