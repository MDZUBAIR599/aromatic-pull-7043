import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import MatchTypeNavbar from './MatchTypeNavbar'
import MatchList from './MatchList'

export default function SeriesPage() {
    return (
        <div style = {{backgroundColor : "#E8E9EE"}}>
            <HeaderNavbar/>
            <MatchTypeNavbar/>
            <MatchList/>
        </div>
    )
}
