import React from 'react'
import './HeaderNavbar'

export default function Completed({setActive, active, activeStyle, activeStyleDefault}) {
    return (
        <>
            <button onClick = {() => setActive("completed")} style = {active === "completed" ? activeStyle : activeStyleDefault}>Completed</button>
        </>
    )
}
