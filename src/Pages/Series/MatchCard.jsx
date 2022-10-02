import React , {useState, useEffect } from 'react'
import './MatchCard.css'

export default function MatchCard({match, matchType}) {
    const [activeClass, setActiveClass] = useState("")
    const [borderColor, setBorderColor] = useState("");

    const dtStart = new Date(match.seriesStartDate)
    const startDate = dtStart.getDate();
    const monthStart = dtStart.getMonth();

    const dtEnd = new Date(match.seriesEndDate)
    const endDate = dtEnd.getDate();
    const monthEnd = dtEnd.getMonth();

    const getMonthName = (month) =>{
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    return monthNames[month]
    }

    const ordinal_suffix_of = (i) => {
        let j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
    useEffect(() => {
        if(match.matchLevel === "international" || match.matchLevel === "international-womens"){
            setActiveClass('active_green');
            setBorderColor('active_border_green')
        }else if(match.matchLevel === "domestic" ||   match.matchLevel === "non-domestic"){
            setActiveClass('active_grey');
            setBorderColor('active_border_grey')
        }else if(match.matchLevel === "international-womens"){
            setActiveClass('active_orange');
            setBorderColor('active_border_orange')
        }else{
            setActiveClass('active_orange');
            setBorderColor('active_border_orange')
        }
    }, [match.matchLevel])

    return (
        <div className = {`matchCard +" "+ ${borderColor}`}>
            <div>
            <p><b>{match.tourName}</b></p>
            <p><span>{match.T20count}</span>
            <span>T20s</span>
            </p>
            </div>
            <div className = {activeClass}>
                <p>{getMonthName(monthStart)} {ordinal_suffix_of(startDate)} To {getMonthName(monthEnd)} {ordinal_suffix_of(endDate)}</p>
            </div>
        </div>
    )
}
