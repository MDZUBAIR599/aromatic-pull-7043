import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Criclytics from '../Pages/Criclytics/Criclytics'
import Fantacy from '../Pages/Fantacy/Fantacy'
import HomePage from '../Pages/HomePage'
import SeriesPage from '../Pages/Series/SeriesPage'

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/FantasyResearch" element={<Fantacy />} />
          <Route path="/Criclytics" element={<Criclytics />} /> 
          <Route path = "/series" element = {<SeriesPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes