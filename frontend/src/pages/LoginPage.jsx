import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/Login';

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <div className='w-full h-full md:p-10'>
                <Login />
            </div>
        </>
    )
}