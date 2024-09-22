import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Contexts/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <div className='flex items-center justify-center bg-[#242424] h-screen w-screen '>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-white text-3xl'>Welcom to our app</div>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App