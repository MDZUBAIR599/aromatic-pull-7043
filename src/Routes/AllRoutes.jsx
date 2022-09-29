import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fantacy from '../Pages/Fantacy/Fantacy'
import FantacyHeader from '../Pages/Fantacy/FantacyHeader'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/fantacy" element={<Fantacy />} />
          <Route path="/fantacyheader" element={<FantacyHeader />} />
        </Routes>
    </div>
  )
}

export default AllRoutes