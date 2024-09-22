import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Contexts/UserContexProvider'

const App = () => {
  return (
    <UserContextProvider>
      <div className='bg-[#242424] h-screen w-screen flex items-center justify-center flex-col gap-3'>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App