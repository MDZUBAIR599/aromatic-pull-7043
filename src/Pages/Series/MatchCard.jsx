import React , {useEffect } from 'react'
import './MatchCard.css'

export default function MatchCard({match}) {
    const dtStart = new Date(match.seriesStartDate)
    const startDate = dtStart.getDate();
    const monthStart = dtStart.getMonth();


    const dtEnd = new Date(match.seriesEndDate)
    const endDate = dtEnd.getDate();
    const monthEnd = dtEnd.getMonth();

    return (
        <div className = "matchCard">
            <div>
            <p><b>{match.tourName}</b></p>
            <p><span>{match.T20count}</span>
            <span>T20s</span>
            </p>
            </div>
            <div>
                <p>{monthStart} {startDate} To {monthEnd} {endDate}</p>
            </div>
        </div>
    )
}
