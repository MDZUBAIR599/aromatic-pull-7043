import React , { useState, useEffect }from 'react'
import MatchCard from './MatchCard'

export default function MatchList({filteredList, matchType}) {
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
        {filteredList?.map(el => (
            <MatchCard match = {el} matchType = {matchType}/>
        ))}
           
        </div>
    )
}
