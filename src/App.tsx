import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import About from './screens/About'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Weeks from './screens/Weeks'
import VerifyEmail from './screens/VerifyEmail'
import Charts from './screens/Charts'
import useLogin from './hooks/useLogin'

const App = () => {
  useLogin()
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/weeks' element={<Weeks />} />
        <Route path='/authentication/verify/:token' element={<VerifyEmail />} />
        <Route path='/charts' element={<Charts />} />
      </Routes>
    </>
  )
}

export default App
