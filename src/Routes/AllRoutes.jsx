import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import PlayerOne from '../Components/PlayerInfo/PlayerOne'
import Criclytics from '../Pages/Criclytics/Criclytics'
import Fantacy from '../Pages/Fantacy/Fantacy'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import PlayerPage from '../Pages/PlayerPage'
import Singleplayer from '../Pages/playerPage/singleplayer/Singleplayer'
import TeamPage from '../Pages/TeamPage'
import Videos from '../Pages/videos-page/Videos'
import Player from "../Components/PlayerInfo/Player"
import PlayerTwo from '../Components/PlayerInfo/PlayerTwo'
import PlayerThree from "../Components/PlayerInfo/PlayerThree"
import Schedule from '../Components/Schedule/Schedule'
import News from '../Components/News/News'
import SeriesPage from '../Pages/Series/SeriesPage'
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
           <Route path='/schedule' element={<Schedule />}  />
           <Route path='/news' element={<News />}  />
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/player' element={<Player />}  />
          <Route path='/harmanpreet'  element={<PlayerOne />} />
          <Route path='/rickypointing' element={<PlayerTwo />} />
          <Route path='/sachin' element={<PlayerThree />} />
          <Route path='/series' element={<SeriesPage />} />
        </Routes>
    </>
  )
}
export default AllRoutes;