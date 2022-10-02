import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import MatchTypeNavbar from './MatchTypeNavbar'
import MatchList from './MatchList'

export default function SeriesPage() {
    const styleHeader = {
        textAign : "left !important",
        marginTop : "100px",
        fontSize : "22px",
        fontWeight : "bold",
        color : "#454547"
    }
    return (
        <div style = {{backgroundColor : "#E8E9EE"}}>
            <h1 style = {styleHeader}>Series</h1>
            <HeaderNavbar/>
            {/* <MatchTypeNavbar/> */}
            {/* <MatchList/> */}
        </div>
    )
}
