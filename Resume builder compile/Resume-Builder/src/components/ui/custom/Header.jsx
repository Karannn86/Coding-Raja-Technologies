import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const{user, isSignedIn}=useUser();
    return (
        <div className='p-5 px-8 flex justify-between shadow-md'>
            <img src='/logo.svg' width={100} height={100} />
            <h1 className='text-3xl'>Build your own Resume!</h1>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                    <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton/>
                </div> :

                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Header