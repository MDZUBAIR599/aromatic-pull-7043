import React , { useState, useEffect }from 'react'
import MatchCard from './MatchCard'

export default function MatchList({filteredList, matchType}) {
    const [filterMatchType, setFilterMatchType] = useState([])
    const MatchListStyle = {
        display : "flex",
        backgroundColor : "#FFFFFF",
        width : "70%",
        padding : "0 60px",
        margin : "0 auto",
        flexDirection: "column",
        justifyContent : "space-between"

    }
    const handleAllMatches = () => {
        setFilterMatchType(filteredList);
    }


    const handleInternationalMatches = () => {
    const internationalMatchesFilter = filteredList?.filter(el => {
        return el.matchLevel === "international" || el.matchLevel === "international-womens";    
    })
    // console.log({internationalMatchesFilter});
    setFilterMatchType(internationalMatchesFilter);
    }

    const handleDomesticMatches = () => {
        const domesticMatchesFilter = filteredList?.filter(el => {
            return el.matchLevel === "domestic" ||   el.matchLevel === "non-domestic"; 
        })
        setFilterMatchType(domesticMatchesFilter);
        }

        const handleWomensMatches = () => {
            const womensMatchesFilter = filteredList?.filter(el => {
                return el.matchLevel === "international-womens"; 
            })
            setFilterMatchType(womensMatchesFilter);
        }
        // console.log({matchType, filterMatchType})

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
        }, [matchType])
        
    console.log({filteredList});
    return (
        <div style = {MatchListStyle}>
        {filteredList?.map(el => (
            <MatchCard match = {el}/>
        ))}
           
        </div>
    )
}
