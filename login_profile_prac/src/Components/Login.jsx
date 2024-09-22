import React, { useContext, useState } from 'react'
import UserContext from '../Contexts/UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-3'>
                <input type="text"
                    className='p-3'
                    placeholder='Username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input type="text"
                    className='p-3'
                    placeholder='Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>
            <button
                onClick={handleSubmit}
                className='bg-blue-300 px-3 py-2'>Submit</button>
        </div>
    )
}

export default Login