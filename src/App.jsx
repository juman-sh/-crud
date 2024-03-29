import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'
import Edit from './components/users/Edit.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/user/create' element={<Create/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/edit/:id' element={<Edit/>}/>
      <Route path='*' element={<h2>User not found</h2>}/>

    </Routes>
  )
}

export default App