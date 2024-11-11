import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


function Hero() {
    return (
        <div className='flex flex-col items-center justify-center gap-9 h-[65vh] mb-24' >
            <h1
                className='font-extrabold text-[50px] text-center mt-16'
            >
                <span className='text-[#4834DF]'>Plan your next trip</span> <br />with AI
            </h1>
            <p className='text-xl text-gray-600 text-center'>Your Personal Travel Expert, Powered by AI!</p>
            <Link to={'/create-trip'}>
                <Button>Let's get started</Button>
            </Link>
        </div>
    )
}

export default Hero
