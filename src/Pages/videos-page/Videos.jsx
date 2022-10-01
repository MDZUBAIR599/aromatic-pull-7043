import React from 'react';

import Iframe from 'react-iframe'
import { useState } from 'react';
import "./Videos.css"
import Footer from '../../Components/Fotter/Footer';
const Videos = () => {
    const [newid, SetNewid] = useState("ISIwuGLX1e0");
   
    const data = [
        {
        id: "ISIwuGLX1e0",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/QaxeZrqYM48",
        heading: "Ben Stokes' ODI Career: A Timeline I Cricket.com",
        des: "England's World Cup winner Ben Stokes will retire from one-day international cricket after Tuesday's series opener against South Africa in Durham. Here's looking back at his ODI career which started way back in August 2011."
    },
    {
        id: "AzStAWhTCbw",
        date:"26 sept 2022",
        imageurl:"https://www.youtube.com/embed/ha6B1U9f-yY",
        heading: "TEAM INDIA'S T20I TIER LIST I CDC Follow Through with Avanish Hegde I Cricket.com",
        des: "In this CDC Special, we get a bowling masterclass from Former England fast-bowler, Darren Gough, who talks about reverse-swing, conventional swing and other tricks pacers use. Also listen in to what Gough said about Bhuvi, Shami and Bumrah's skillsets with the ball in hand."
    },
    {
        id: "vaarOjNfMQQ",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/gqQgCOWpJa0",
        heading: "Bumrah out, who comes in? I CDC Reaction I Cricket.com",
        des: "We reflect what happened in the 3rd ODI and talk about the what lies ahead for both teams in the review with Darren Gough. Watch this full video now."
    },
    {
      
        id: "Zcww_C5DGQY",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/UpWJiTveRqs",
        heading: "Cricket.com DECODED I Episode 39 I What makes Bhuvneshwar Kumar so potent?",
        des: "At 32, Bhuvneshwar Kumar still stands tall as one of India’s best white-ball bowler. But what makes Bhuvi so good? We tell you exactly that on Decoded today!"
    },
   
    {
        id: "zlRva2aIfks",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/bF6s9m1gL6g",
        heading: "RAW-VISION! Virat Kohli coaching Ishan Kishan at the nets at Old Trafford & more I Cricket.com",
        des: "Watch this latest footage of Virat Kohli and the rest of the team training before the 3rd ODI at Old Trafford, Manchester."
    },
    
    {
        id: "etaOEN85l90",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/OIQ_PlPLDCc",
        heading: "India series will help us to fill the gaps ahead of the WT20 Temba Bavuma, ahead of 1st match",
    },
    
    {
        id: "tEjnMcMdlG4",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/ENTrtxQW5fs",
        heading: "We haven't played our best cricket in this white-ball leg ENG vs IND  Jos Buttler  Presser",
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    },
    {
      
        id: "ykeLDSfpHLA",
        date:"26 sept 2022",
        imageurl: "https://www.youtube.com/embed/OIQ_PlPLDCc",
        heading: "We haven't played our best cricket in this white-ball leg ENG vs IND  Jos Buttler  Presser",
       
        des: "Watch Jos Buttler's full press conference post the third ODI against India at Old Trafford, Manchester."
    }
    ]
    return (
        <div className='box'>
            <div className='colorbox'>          
            </div>
     
           <div className='bbox'>
           
          <Iframe url={`https://www.youtube.com/embed/QaxeZrqYM48/${newid}`} width='100%' height='450px' display='initial' position='relative'></Iframe>
   
    
           </div>
            <div>
            <div className='mapbox'>
                {
                    data.map((el)=>(
                        <div  className='mappedbox'>
                          <div className='insidemap'>
                          <Iframe url={el.imageurl}></Iframe>
                          </div>
                         
                        <div >
                                <h4>{el.heading}</h4>
                                <div className='h6box'>
                        <h6>{el.date}</h6>
                        </div>
                         
                        </div>
                        
                         
                        </div>
                    ))
                }
            </div>
            </div>
            <Footer/>
        </div>
       
    )
}

export default Videos