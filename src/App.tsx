import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Weeks from './screens/Weeks'
import VerifyEmail from './screens/VerifyEmail'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/week' element={<Weeks />} />
        <Route path='/authentication/verify/:token' element={<VerifyEmail />} />
      </Routes>
    </>
  )
}

export default App
