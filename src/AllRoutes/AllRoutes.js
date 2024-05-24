import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Teacher from '../componants/feature/Teacher'
import Home from '../componants/feature/Home'
import AddTeacher from '../componants/feature/AddTeacher'

const Header = () => {
  return (
    <>
    <Routes> 
        <Route path='' element={<Home/>}/>
        <Route path='teacher' element={<Teacher/>}/>
        <Route path='teacher/add' element={<AddTeacher/>}/>
        <Route path='teacher/edit/:id' element={<AddTeacher/>}/>



    </Routes>
    
    
    
    </>
  )
}

export default Header