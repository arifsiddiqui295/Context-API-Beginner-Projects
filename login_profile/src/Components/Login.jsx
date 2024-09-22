import React, { useState, useContext } from 'react'
import UserContext from '../Contexts/UserContext';

const Login = () => {
    const {setUser} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <>
            <div className='flex gap-3 '>
                <input
                    className='p-3'
                    type="text" placeholder='Username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input
                    className='p-3'
                    type="text" placeholder='Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>
            <button
                onClick={handleSubmit}
                className='bg-blue-500 text-white px-3 py-2 rounded-sm'>Submit</button>
        </>
    )
}

export default Login