import React, { useState } from 'react'
import './HeaderNavbar.css'

export default function HeaderNavbar() {
    const [active, setActive] = useState()
    return (
        <div className = "headerNavbar">
            <button>UPCOMING</button>
            <button>ONGOING</button>
            <button>COMPLETED</button>
        </div>
    )
}
