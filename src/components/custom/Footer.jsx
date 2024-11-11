import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='flex gap-2 justify-center items-stretch py-10'>
            <p className='text-lg'>Developed by Shohaib Mallick</p>
            <p className='text-lg'>/</p>
            <a href='https://github.com/shohaibmk'>
                <img className='h-7 w-7' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg' />
            </a>
            <a href='https://www.linkedin.com/in/shohaibmk/'>
                <img className='h-7 w-7' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' />
            </a>

        </div>
    )
}
