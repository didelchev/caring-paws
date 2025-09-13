import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'


import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PetDetails from './pages/PetDetails/PetDetails'
import PostPet from './pages/PostPet/PostPet'
import EditPet from './pages/EditPet/EditPet'
import PetCatalog from './pages/PetCatalog/PetCatalog'
import Header from './components/Header/Header'
import Logout from './components/Logout/Logout'


const App = () => {

  return (
    <AuthContextProvider >  
      <div className='app'> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/petcatalog' element={<PetCatalog/>}/>
        <Route path='/petcatalog/:id' element={<PetDetails/>}/>
        <Route path='/post-pet' element={<PostPet/>}/>
        <Route path='/petcatalog/:id/edit' element={<EditPet/>}/>
      </Routes>
      </div>
      </AuthContextProvider> 
  )
}

export default App
