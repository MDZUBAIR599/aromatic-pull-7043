import React from 'react'
import './HeaderNavbar'

export default function Outgoing({setActive, active, activeStyle, activeStyleDefault}) {
    return (
        <>
            <button 
            onClick = {() => setActive("outgoing")}
            style = {active === "outgoing" ? activeStyle : activeStyleDefault}>Outgoing</button>
        </>
    )
}
