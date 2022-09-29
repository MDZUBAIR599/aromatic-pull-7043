import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SeriesPage from '../Pages/Series/SeriesPage'
import HomePage from '../Pages/HomePage';


function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path = "/series" element = {<SeriesPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes