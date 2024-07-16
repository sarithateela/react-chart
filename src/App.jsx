import { useState } from 'react'

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
 } from "react-router-dom";
import Chart from './Components/Chart/Chart.jsx'
import Nav from './Components/Header/Header.jsx'
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App