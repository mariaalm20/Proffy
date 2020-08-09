import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import Teachers from './pages/Teacher'
import TeachersForm from './pages/TeacherForm'

export default function Routes(){

  return(
   <BrowserRouter>
     <Route exact path = "/" component = {Landing}/>
     <Route  path = "/study" component = {Teachers}/>
     <Route  path = "/give-classes" component = {TeachersForm}/>
   </BrowserRouter>
  )
}

