import React from 'react';
import UserProfileUpdate from '../components/UserProfileUpdate';
import NavBar from '../components/NavBar';

export default function ProfilePage() {
    return (
        <>
            <NavBar />
            <div className='w-full h-full p-5 md:p-10'>
                <UserProfileUpdate />
            </div>
        </>
    )
}