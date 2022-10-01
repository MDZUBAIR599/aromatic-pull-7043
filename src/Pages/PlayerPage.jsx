import React from 'react'
import { Stack, Input } from "@chakra-ui/react";
import "./team.css";
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
 import { Link } from 'react-router-dom';
import getPlayers from '../playerreducer/action';
export default function PlayerPage() {
  const dispatch = useDispatch();
       const players = useSelector((state)=>state.playerreducer.players);
         const [player, setPlayer] = useState([]);
         const [color , setColor] = useState("All");
        
    useEffect (()=>{
          if(players.length == 0 ){
          
            dispatch(getPlayers());
          }
         setPlayer(players);
    },[players.length]);

    const  handleClick = (text)=>{
          setColor(text);
      const X = players.filter((e)=>e.country == text);
        if(text === "All"){
          setPlayer(players);  
        
        }else{
          setPlayer(X);
          
        }    
       }
    
  return (
    <div className="team-main">
      <div className="team-main-2">
        <Stack spacing={3}>
          <Input
            variant="outline"
            placeholder="Team Search"
            width="93%"
            mx="auto"
            mb={12}
            mt={12}
            borderColor="#777777"
            size="sm"
          />
        </Stack>
        <div className="Heading-player">
         
          <div className="Heading-player-1" style={{backgroundColor : `${color == "All" ? "#A70E13" : ""}`,color : `${color == "All" ? "white" : ""}` }}    onClick={()=>handleClick("All")}> ALL</div>
              <div className="Heading-player-2" style={{backgroundColor : `${color == "INDIA" ? "#A70E13" : ""}`,color : `${color == "INDIA" ? "white" : ""}` }}  onClick={()=>handleClick("INDIA")}> IND</div>
              <div className="Heading-player-3" style={{backgroundColor : `${color == "NEW ZEALAND" ? "#A70E13" : ""}`,color : `${color == "NEW ZEALAND" ? "white" : ""}` }}  onClick={()=>handleClick("NEW ZEALAND")}> NZ</div>
              <div className="Heading-player-4" style={{backgroundColor : `${color == "AUSTRALIA" ? "#A70E13" : ""}`,color : `${color == "AUSTRALIA" ? "white" : ""}` }} onClick={()=>handleClick("AUSTRALIA")}> AUS</div>
              <div className="Heading-player-5" style={{backgroundColor : `${color == "ENGLAND" ? "#A70E13" : ""}`,color : `${color == "ENGLAND" ? "white" : ""}` }} onClick={()=>handleClick("ENGLAND")}> ENG</div>
        </div>
       <div className='main-player-grid'>
        
       { player.length >= 0 &&  player.map((e)=>
                    
                <div className='main-colum-gird' key={e.id}> 
                 <Link to ={`/players/${e.id}`}>
                <div className='div-player-logo'> <img className='player-logo'  src={e.logo} alt="" /></div>
              <div className='div-image-player'>
              
              <img className='image-player' src={e.image} alt="" />
              </div>
              <div className='column-name' >{e.name}</div>
              </Link>
                </div>   
              
                )
              }
            
       </div>
      </div>
    </div>
  )
}
