import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewStudent from '../pages/AddNewStudent'
import Contact from '../pages/Contact'
import EditDetails from '../pages/EditDetails'
import Home from '../pages/Home'
import Student from '../pages/Student'

function Routinggg() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Student' element = {<Student/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/AddNewStudent' element={<AddNewStudent/>}/>
            <Route path='/EditDetails' element={<EditDetails/>}/>
        </Routes>
    </div>
  )
}

export default Routinggg