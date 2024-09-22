import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);
    if (!user) {
        return (
            <h1 className='text-white text-xl'>Not Logged in</h1>
        )
    }
    return (
        <div className='text-white text-xl'>Profile:{user.username}</div>
    )
}

export default Profile