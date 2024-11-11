import React from 'react'
import { Button } from '../ui/button'

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center mx-5 gap-9'>
            <h1
                className='font-extrabold text-[50px] text-center mt-16'
            >
                <span className='text-[#4834DF]'>Plan your next trip</span> <br />with AI
            </h1>
            <p className='text-xl text-gray-600 text-center'>Your Personalized Travel Expert, Powered by AI!</p>
            <Button>Get started</Button>
        </div>
    )
}

export default Hero
