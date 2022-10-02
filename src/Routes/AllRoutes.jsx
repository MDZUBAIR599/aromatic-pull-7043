
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import News from '../Components/News/News'
import Details from '../Components/Schedule/Details'
import Criclytics from '../Pages/Criclytics/Criclytics'
import Fantacy from '../Pages/Fantacy/Fantacy'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import PlayerPage from '../Pages/PlayerPage'
import Singleplayer from '../Pages/playerPage/singleplayer/Singleplayer'
import SeriesPage from '../Pages/Series/SeriesPage'
import TeamPage from '../Pages/TeamPage'
import Videos from '../Pages/videos-page/Videos'
import Series from '../Pages/Series/SeriesPage'


function AllRoutes() {
  return (
    <>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/FantasyResearch" element={<Fantacy />} />
          <Route path="/Criclytics" element={<Criclytics />} /> 
          <Route path="/players" element={  <PlayerPage/>} /> 
          <Route path="/teams" element={  <TeamPage/>} /> 
          <Route path="/players/:id" element={  <Singleplayer/>} /> 
          <Route path="/videos" element={  <Videos/>} /> 
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/series' element={<SeriesPage/>}></Route>
          <Route path='/schedule' element={<Details/>}></Route>
          <Route path='/news' element={<News/>}></Route>
           <Route path="/series" element={  <Series/>} /> 

        </Routes>

    </>
  )

}

export default AllRoutes;
