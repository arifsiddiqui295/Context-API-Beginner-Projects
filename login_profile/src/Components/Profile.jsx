import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    if (!user) {
        return (
            <h1 className='text-white'>Not Logged in</h1>
        )
    }
    return (
        <div className='text-white text-2xl'>Profile name: {user.username}</div>
    )
}

export default Profile