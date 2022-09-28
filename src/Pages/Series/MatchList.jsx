import React from 'react'
import MatchCard from './MatchCard'

export default function MatchList() {
    const MatchListStyle = {
        display : "flex",
        backgroundColor : "#FFFFFF",
        width : "70%",
        padding : "0 60px",
        margin : "0 auto",
        flexDirection: "column",
        justifyContent : "space-between"

    }
    return (
        <div style = {MatchListStyle}>
           <MatchCard/>
           <MatchCard/> 
           <MatchCard/> 
           <MatchCard/> 
           <MatchCard/> 
           <MatchCard/> 
           <MatchCard/>  
        </div>
    )
}
