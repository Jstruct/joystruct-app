// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClientHome from './pages/ClientSide/ClientHome';
import AdminDashboard from './pages/AdminDash/AdminHome';

export default function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<ClientHome/>}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
        </Routes>
      </Router>
  )
}

