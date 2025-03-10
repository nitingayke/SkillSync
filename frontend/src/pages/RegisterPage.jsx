import React from 'react';
import NavBar from '../components/NavBar';
import Register from '../components/Register';

export default function RegisterPage() {
    return (
        <>
            <NavBar />
            <div className='w-full h-full md:p-10'>
                <Register />
            </div>
        </>
    )
}