import React , { useState } from 'react'
import './MatchTypeNavbar.css'
import Modal from 'react-modal'

export default function MatchTypeNavbar(){
    const [isOpen, setIsOpen] = useState(false)
    const handleModal = () => {
        setIsOpen(!false)
    }
    return (
        <div className  = "matchType">
        <div className = "match_type_nav">
            <button className = "match_type_buttons">ALL</button>
            <button className = "match_type_buttons">INTERNATIONAL</button>
            <button className = "match_type_buttons">DOMESTIC</button>
            <button className = "match_type_buttons">WOMEN'S</button>
        </div>
        <div>
            <div className = "filter_btn" onClick = {handleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.406" height="15" viewBox="0 0 16.406 15"><defs></defs><g transform="translate(-38.02 -611)"><g className="a" transform="translate(38.02 611)"><circle className="b" cx="3.348" cy="3.348" r="3.348"/><circle className="c" cx="3.348" cy="3.348" r="2.748"/></g><g className="a" transform="translate(47.73 619.304)"><circle className="b" cx="3.348" cy="3.348" r="3.348"/><circle className="c" cx="3.348" cy="3.348" r="2.748"/></g><line className="a" x2="8.653" transform="translate(45.612 614.013)"/><line className="a" x2="8.856" transform="translate(38.02 622.451)"/></g></svg>
            <span>Filter</span>
            </div>
        </div>
        <Modal className = "modal" isOpen = {false}>
            <div>
                <p>FILTERS</p>
                <p onClick = {handleModal}>CLOSE</p>
            </div>
            <div>Country</div>
        </Modal>
        </div>
    )
}
