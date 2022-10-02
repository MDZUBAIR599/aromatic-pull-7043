import React from "react";
import hnews from "../data/HomeNewsData";
// import Newscard from '../Components/newscard/Newscard';
import NewsCard from '../Components/News/NewsCard'
import { useState } from "react";
import v from "../Assets/slider/v.svg";

import { Link } from "react-router-dom";

const HomeNews = () => {
  const [newsList, setNewsList] = useState(hnews);
 

  return (
   <div style={{margin:"auto"}}>
     <div style={{ 
      width: "100%",
      // marginLeft:"10%",

    }} className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "0.75 rem",
            fontWeight: 600,
            marginLeft:"11%"
          }}
        >
          NEWS AND ARTICLES
        </h2>
      <Link to={`/news`}><img alt="text" src={v} /></Link>
      </div>
      <hr />
      {/* {newsList.map((item) => (       
          <div  key={item.id}>
            <Link style={{ textDecoration: "none", color: "#141b2f" }} to={`/news`}>
            <Newscard   data={item} />
            </Link>
          </div>
        
      ))} */}
       <NewsCard />
    </div>
   </div>
  );
};

export default HomeNews;
