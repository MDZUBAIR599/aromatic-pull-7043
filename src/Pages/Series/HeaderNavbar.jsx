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
    const [labelList, setLabelList] = useState([])
    const [matchType, setMatchType] = useState('')
    const [activeCountry, setActiveCountry] = useState("")

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
        return matches;
    }

    const filterOutgoingMatchData = () => {
        const matches = matchData?.seriesPriority.filter(el => {
            // console.log(dateTime(el.seriesStartDate) <= d1 && dateTime(el.seriesEndDate) > d1)
            return dateTime(el.seriesStartDate) <= d1 && dateTime(el.seriesEndDate) > d1;
        })
        
        return matches;
    }

    const filterCompletedMatchData = () => {
        const matches = matchData?.seriesPriority.filter(el => {
            
            return dateTime(el.seriesEndDate) < d1;
        })
        return matches;
    }


    const handleAllMatches = () => {
        console.log("len",filteredList.length)
        setLabelList(filteredList)
    }


    const handleInternationalMatches = () => {
    const matches = filteredList?.filter(el => {
        return (el.matchLevel === "international" || el.matchLevel === "international-womens");    
    })
    // console.log({internationalMatchesFilter});
    setLabelList(matches);
    }

    const handleDomesticMatches = () => {
        const matches = filteredList?.filter(el => {
            return el.matchLevel === "domestic" ||   el.matchLevel === "non-domestic"; 
        })
        setLabelList(matches);
        }

        const handleWomensMatches = () => {
            const matches = filteredList?.filter(el => {
                return el.matchLevel === "international-womens" || el.matchLevel === "domestic-womens"; 
            })
            setLabelList(matches);
        }

    const filterByCountry = () => {
        setMatchType("all")
        const country = filteredList.filter(el => (el?.country || []).includes(activeCountry))
        setLabelList(country)
    }


    useEffect(() => {
        let matches = matchData
        if(active === "upcoming"){
            matches = filterUpcomingMatchData()
        }else if(active === "outgoing"){
            matches = filterOutgoingMatchData()
        }else if(active === "completed"){
            matches = filterCompletedMatchData()
        }
        setFilteredList(matches);
     setMatchType('all')
    }, [active])
    
    useEffect(() => {
        if(matchType === 'all'){
            handleAllMatches()
        }else if(matchType === 'international'){
            handleInternationalMatches()
        }else if(matchType === 'domestic'){
            handleDomesticMatches()
        }else if(matchType === 'women'){
            handleWomensMatches()
        }
    }, [filteredList, matchType])


    useEffect(() => {
        filterByCountry()
    }, [activeCountry])

    console.log({filteredList, labelList, active, matchType});
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
        <MatchTypeNavbar matchType = {matchType} setMatchType = {setMatchType}
           activeCountry =  {activeCountry} setActiveCountry = {setActiveCountry}
        />
        <MatchList filteredList = {labelList} matchType = {matchType}/>
        </>
    )
}
