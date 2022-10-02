import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import Footer from '../../Components/Fotter/Footer'

export default function SeriesPage() {
    const styleHeader = {
        textAlign : "left",
        // position : "fixed",
        marginTop : "100px",
        padding : "0 210px",
        fontSize : "22px",
        fontWeight : "bold",
        color : "#454547"
    }
    return (
        <div style = {{backgroundColor : "#E8E9EE"}}>
            <h1 style = {styleHeader}>Series</h1>
            <HeaderNavbar/>
            <Footer/>
            {/* <MatchTypeNavbar/> */}
            {/* <MatchList/> */}
        </div>
    )
}
