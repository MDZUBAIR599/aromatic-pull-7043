import React , {useState }from 'react'
import './HeaderNavbar'

export default function Upcoming(props) {
    const { active, activeStyle, setActive, activeStyleDefault} = props;

    const [show, setShow] = useState(false);
    // console.log({active})
    return (
        <>
            <button onClick = {() => setActive('upcoming')} style = {active === "upcoming" ? activeStyle : activeStyleDefault}>Upcoming</button>
        </>
    )
}
