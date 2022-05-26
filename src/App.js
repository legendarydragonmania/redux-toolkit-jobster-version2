import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, Dashboard } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
