import React, { useState , useEffect} from 'react'
import './HeaderNavbar.css'
import Upcomimg from './Upcoming';
import Outgoing from './Outgoing'
import Completed from './Completed'
import MatchTypeNavbar from '../Series/MatchTypeNavbar'
import MatchList from '../Series/MatchList'
import matchData from './match.json'

export default function HeaderNavbar() {
    const [active, setActive] = useState("upcoming")
    const [filteredList, setFilteredList] = useState([])
    const [matchType, setMatchType] = useState('all')
    const activeStyle = {
        borderBottom : "2px solid #D54130"
    }
    const activeStyleDefault = {
        borderBottom: "1px solid #999999"
    }
    const d1 = new Date()
    // console.log({d1})

    function dateTime(timestamp){
        return new Date(timestamp)
    }
    const filterUpcomingMatchData = () => {
        const matches = matchData?.seriesPriority.filter(el => {
            return dateTime(el.seriesStartDate) > d1;
        })
        setFilteredList(matches);
    }

    const filterOutgoingMatchData = () => {
        const matches = matchData?.seriesPriority.filter(el => {
            return dateTime(el.seriesStartDate) <= d1 && dateTime(el.seriesEndDate) > d1;
        })
        setFilteredList(matches);
    }

    const filterCompletedMatchData = () => {
        const matches = matchData?.seriesPriority.filter(el => {
            return dateTime(el.seriesEndDate) < d1;
        })
        setFilteredList(matches);
    }
    useEffect(() => {
        if(active === "upcoming"){
            filterUpcomingMatchData()
        }else if(active === "outgoing"){
            filterOutgoingMatchData()
        }else if(active === "completed"){
            filterCompletedMatchData()
        }
    }, [active])

    // console.log({filterMatchData});
    return (
        <>
        <div className = "headerNavbar">
            <Upcomimg setActive = {setActive} active = {active} activeStyle = {activeStyle} activeStyleDefault = {activeStyleDefault}/>
            <Outgoing setActive = {setActive} active = {active} activeStyle = {activeStyle}
                activeStyleDefault = {activeStyleDefault}
            />
            <Completed setActive = {setActive} active = {active} activeStyle = {activeStyle}
                activeStyleDefault = {activeStyleDefault}
            />
        </div>
        <MatchTypeNavbar matchType = {matchType} setMatchType = {setMatchType}/>
        <MatchList filteredList = {filteredList} matchType = {matchType}/>
        </>
    )
}
