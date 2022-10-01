
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Criclytics from '../Pages/Criclytics/Criclytics'
import Fantacy from '../Pages/Fantacy/Fantacy'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import PlayerPage from '../Pages/PlayerPage'
import Singleplayer from '../Pages/playerPage/singleplayer/Singleplayer'
import TeamPage from '../Pages/TeamPage'
import Videos from '../Pages/videos-page/Videos'


function AllRoutes() {
  return (
    <>
   
    
    <div>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/FantasyResearch" element={<Fantacy />} />
          <Route path="/Criclytics" element={<Criclytics />} /> 
          <Route path="/players" element={  <PlayerPage/>} /> 
          <Route path="/teams" element={  <TeamPage/>} /> 
          <Route path="/players/:id" element={  <Singleplayer/>} /> 
          <Route path="/videos" element={  <Videos/>} /> 
          <Route path='/login' element={<LoginPage/>}></Route>
        </Routes>
    </div>
    </>
  )

}

export default AllRoutes;
