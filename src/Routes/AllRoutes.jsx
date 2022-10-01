import React from "react";
import { Route, Routes } from "react-router-dom";
import Criclytics from "../Pages/Criclytics/Criclytics";
import Fantacy from "../Pages/Fantacy/Fantacy";
import HomePage from "../Pages/HomePage";
import Schedule from "../Components/Schedule/Schedule";
import News from "../Components/News/News";
import Player from "../Components/PlayerInfo/Player";
import PlayerOne from "../Components/PlayerInfo/PlayerOne";
import PlayerTwo from "../Components/PlayerInfo/PlayerTwo";
import PlayerThree from "../Components/PlayerInfo/PlayerThree";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FantasyResearch" element={<Fantacy />} />
        <Route path="/Criclytics" element={<Criclytics />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/news" element={<News />} />
        <Route path="/player" element={<Player />} />
        <Route path="/harmanpreet" element={<PlayerOne />} />
        <Route path="/rickypointing" element={<PlayerTwo />}  />
        <Route path="/sachin" element={<PlayerThree />}  />
      </Routes>
    </div>
  );
}

export default AllRoutes;
