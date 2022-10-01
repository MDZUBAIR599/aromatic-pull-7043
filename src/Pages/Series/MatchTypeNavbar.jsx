import React , { useState } from 'react'
import './MatchTypeNavbar.css'
import Modal from 'react-modal'
// import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import matchData from './match.json'


export default function MatchTypeNavbar({matchType, setMatchType, activeCountry, setActiveCountry}){
    const [isOpen, setIsOpen] = useState(false)
    // console.log({matchData});
    return (
        <div className  = "matchType">
        <div className = "match_type_nav">
            <button onClick = {() => setMatchType('all')} className = {`match_type_buttons ${matchType === 'all' ? 'active_red' : 'active_red_not'}`}>ALL</button>
            <button onClick = {() => setMatchType('international')} className = {`match_type_buttons ${matchType === 'international' ? 'active_green' : 'active_green_not'}`}>INTERNATIONAL</button>
            <button onClick = {() => setMatchType('domestic')} className = {`match_type_buttons ${matchType === 'domestic' ? 'active_grey' : 'active_grey_not'}`}>DOMESTIC</button>
            <button onClick = {() => setMatchType('women')} className = {`match_type_buttons ${matchType === 'women' ? 'active_orange' : 'active_orange_not'}`}>WOMEN'S</button>
        </div>
        <div>
            <div className = "filter_btn" onClick = {() => setIsOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.406" height="15" viewBox="0 0 16.406 15"><defs></defs><g transform="translate(-38.02 -611)"><g className="a" transform="translate(38.02 611)"><circle className="b" cx="3.348" cy="3.348" r="3.348"/><circle className="c" cx="3.348" cy="3.348" r="2.748"/></g><g className="a" transform="translate(47.73 619.304)"><circle className="b" cx="3.348" cy="3.348" r="3.348"/><circle className="c" cx="3.348" cy="3.348" r="2.748"/></g><line className="a" x2="8.653" transform="translate(45.612 614.013)"/><line className="a" x2="8.856" transform="translate(38.02 622.451)"/></g></svg>
            <span>Filter</span>
            </div>
        </div>
        <Modal className = "modal" isOpen = {isOpen}>
            <div>
                <p>FILTERS</p>
                <button onClick = {() => setIsOpen(false)}>CLOSE</button>
            </div>
            <div>Country</div>
            <div className = "country_versus">
                <button onClick = {() => setActiveCountry('ind')}>
                <span className="fi fi-in"></span> <span>IND</span>
                </button>

                <button>
                <span className="fi fi-au"></span> <span>AUS</span>
                </button>

                <button>
                <span className="fi fi-nz"></span> <span>NZ</span>
                </button>

                <button>
                <span className="fi fi-gb-eng"></span> <span>ENG</span>
                </button>

                <button>
                <span className="fi fi-za"></span> <span>SA</span>
                </button>

                <button>
                <span className="fi fi-pk"></span> <span>PAK</span>
                </button>

                <button>
                <span className="fi fi-bd"></span> <span>BAN</span>
                </button>

                <button>
                <span className="fi fi-lk"></span> <span>SL</span>
                </button>

                <button>
                <span className="fi fi-jm"></span> <span>WI</span>
                </button>

            </div>
            <div>Format</div>
            <div className = "country_versus">
                <button style = {{padding : "6px 55px"}}>
                <span>ODI</span>
                </button>

                <button style = {{padding : "6px 55px"}}>
                <span>T20</span>
                </button>

                <button style = {{padding : "6px 55px"}}>
                <span>Tests</span>
                </button>

                <button style = {{padding : "6px 48px"}}>
                <span>T100</span>
                </button>
            </div>
            <div className = "country_versus" >
                <button style = {{backgroundColor : "#A70E13", color : "#FFFFFF", padding : "5px 50px"}}
                onClick = {() => setIsOpen(false)}
                >DONE</button>
            </div>
        </Modal>
        </div>
    )
}
