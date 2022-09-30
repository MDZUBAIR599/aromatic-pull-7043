import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Criclytics from '../Pages/Criclytics/Criclytics'
import Fantacy from '../Pages/Fantacy/Fantacy'
import SecondPage from '../Pages/Fantacy/SecondPage'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/FantasyResearch" element={<Fantacy />} />
          <Route path="/Criclytics" element={<Criclytics />} /> 
          <Route path={"/secondPage"} element={<SecondPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes