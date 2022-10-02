import React , { useState } from 'react'
import './MatchTypeNavbar.css'
import Modal from 'react-modal'
import { findFlagUrlByCountryName} from "country-flags-svg";



export default function MatchTypeNavbar({matchType, setMatchType, activeCountry, setActiveCountry , isOpen, setIsOpen}){
    
    

    const flagUrlIndia = findFlagUrlByCountryName("India");
    const flagUrlAus = findFlagUrlByCountryName("Australia");
    const flagUrlNew = findFlagUrlByCountryName("New Zealand");
    const flagUrlEng = findFlagUrlByCountryName("United Kingdom");
    const flagUrlSa = findFlagUrlByCountryName("South Africa");
    const flagUrlPak = findFlagUrlByCountryName("Pakistan");
    const flagUrlBan = findFlagUrlByCountryName("Bangladesh");
    const flagUrlSriLanka = findFlagUrlByCountryName("Sri Lanka");
    const flagUrlWi = findFlagUrlByCountryName("Jamaica");
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
                <button onClick = {() => setActiveCountry('ind')}
                >
                <img src = {flagUrlIndia} /><span>IND</span>
                </button>

                <button>
                <img src = {flagUrlAus}/><span>AUS</span>
                </button>

                <button>
                <img src = {flagUrlNew} height = "10"/><span>NZ</span>
                </button>

                <button>
                <img src = {flagUrlEng} /> <span>ENG</span>
                </button>

                <button>
                <img src = {flagUrlSa} /> <span>SA</span>
                </button>

                <button>
                <img src = {flagUrlPak} /> <span>PAK</span>
                </button>

                <button>
                <img src = {flagUrlBan} /> <span>BAN</span>
                </button>

                <button>
                <img src = {flagUrlSriLanka} /> <span>SL</span>
                </button>

                <button>
                <img src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQEBASEBURDxAVEBgPFxAPEBAWFRIWFhgVFRUYHCggGB0lGxUVITEhJSkrLi4uFx80OUAtOCgtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAN4A4wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEUQAAIBAgIFBwgIBAUFAQAAAAABAgMRBAUGEiExURNBUmFxgZEHFSIycqGxwRQjNEJigrLRMzWS8CQlQ4PhU2NzosIW/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQf/xAA8EQABAwIDAwkGBAYDAQAAAAABAAIDBBEFITESQVEGE2FxgZGhsdEUIkJSweEVMjPwQ3JzorLxIzRiJP/aAAwDAQACEQMRAD8A5eADjVuQABEAARAD6UHZuzst7s7LtYRfIACIAAiHqXDb2EtkmjmIxbXJQtHnnP0YLv5zpmjuh1DCWnL62pzyqbo+yuY4KvEYqbIm7uA1WLnhuq5BWoyg9WcZQfCScX4Mxncc4yPD42OrUim16so7Jx7Gc1z/AEKxGGvKC5enxgvTXbH9jCmxKOQ7Eg2H8D91jHKx4u0qsANAklsQABEAARAAEQABEAARAAEQABEAARACU0fyOpjKqp01ZL15P1YL9zF72saXONgEK8yHJamMqqnTVl9+T9WC4s7BlWTUMJRVKMYtfec0m5vnbPrKstpYKiqdNWtvf3pvizyrUcndkVBTzYxJfNsI373Ho/eShMTxZtMNlubuHqtLHaI4KvtdNRb56b1GyExPk1pPbTrzj1SSkvEsvgfaqNc5Iu5P1Uf6NQepwuouLlIR+dncfVUteTOd/tMbey7k5lWgmFoWlUvWkv8AqbI/0omuXlxZ8Sm3vaZh+CYjJ7sk4A/8jP6LbJylZb3WG/TYLb5eEFqwSstyWyKNapVct7/Y+AS9DgtLR+81t3fMcz9uxQVXidRU5ONhwGn3XidtxswxfNJXNcHVWUFPWN2Zm36d46jquenq5qc3jdby7tFgzPRvCYu7nTSl0oehL3FbxPkzjf6vENL8aT+BajIq0lzsgH4BVRG1NPlwcL2Vhg5SWH/I3PoPqqbS8mb+9if6Y/uSWE8neFhtqTqVe1qC9xYHWl0mfLfWj1uCV7/1Ki38oWcnKUfAw9pAXzhsmwlOLpwo00pK0tibfaznumOh0sK3Wopzovet8qfb1HQjbo1VJak1dNW27n1M56nCajDxz9O50g+MHf0jq/d9FsoMe52TYmFr6emfguBgvGmuhro62Iwybp7XOC2un1rqKOb6apjqGbbDl5KzAg6IADevUAARAAEQABEAPAiltHsiq42qoU1aKtyknugv36jsOWZdSwVFU6aslvf35vi2a+ilKjHB0nh42jKCk+k5c+s+d32GWpNyd2RFNA/FqhzHHZjYcxvP78FCYviRpWWaMze3DrXtSo5O7PkAvEcTImBjBYDQKive6Rxc43JQ8PirVjBXk7L+9xCY7P2tlOD7Z3S7kYSzsiF3FYE2UnHMIa7pyepLhLZfsZnr4iEFeclHtKVjMZOq1KbV0tllYwzqOXrNvt2kacUIJAF+G7vWG0rthcZGrdwTaX3mrJ9htFSwGdVKaUNVTS3JKz9xO4LNIVNjUoS4SWx9jOunrGSDM5r0FSAAO1ZIAIxb2JXPHODQSTYBegEmwQ8NyGD4vwPr6HHi/cQUnKTD2O2dsnpAJHepSPBqtwvs26zYrSPDaqYRrdt+JqtEnSV9PVtvC8HzHZquKopJqc2lbbyW5h69/Rl7+ftKDptoZq62Jwsbx31IL7v4o9XUXI3sJUbTT22K1i+Hmhca2myHxt3HpHpxzCseC4q9zhBJmdx+hXAASulFWnLGV3Riow5RpW3NrY33u5FHTG7aaHWtcXsraEABmiAAIgACIAAi6T5K8zvCrhpP1Hr0+x+svG3iWzERtJnKNB8ZyOPoO+ycuTl1qSsvfqnXcdHamcNE72fFgN0rfEf6UBygg26fb3tIP0K1QDQx6rT9CklFc8m9vci4Pdsi9r9So2i+sfmdOlsb1pcFtffwK/i87qTukoxXCyb8TYno/PbKVWK4t3+JG4nDwhsVVTf4U7eJC1U1QdRsjsWBJWq2egEYsFtYPMKlL1GrcGkyYwmkKdlUhbrjtXgQFGlrO2tGPtPVRueZqtrpRl7Mkzrp5Z2/p5heglW6hXjNa0JKS6jIUyjCvh5ayjKPHZdPtsWjLsbGtDWWxrZJc6ZMU1XzvuvFnea2B11txV3ZElRpKK+JqYKN5X4I3iocrK9/ONpWnIC56SdOwBWvAKRuwZzroOi2vigAKarKhr4mjdXW9e82AdNJVyUsoljOY8ejqWiop2TxljxkVEmHSDH/AEXBVau6WraHtS2L++o2pw9JrrKj5V8ZaGHoJ75Ocvyqy+LL7jU4qG08Q0edo9QF/NV3AKUipkLvhy7b/Zc4YAM1ckAARAAEQABEAARbWVtqvQa3qtTt/WjumN9Vdq+BxHR6lr4vDR416fgpJv4Hbsc9iXWRsmeJUwHFReMG1I/qWmR2aZtGjsXpS4cO0y5niuSptpXk9kVxbITCZHOo9erJxvtfPJ/sWqpmkB5uIXd5L5yTwUZi8bOq7zk31LYl3GuXGlktGP3Nb2m2zXzHB4WC9JKL5tVvWfcRr6CW229w7SsdlVcHtS13q3tzX3nhHLFeGSjiJQd4Scexm1l2YclslCM1fnS1vEsmHWHrxuoRfFWSaOynphL+V9ncM16BdReA0ga9Gqrrit67UT9DUa14W9Jb1baRmI0fpy9VuD6tq8DHl2Eq4eeq/Tpye233XxsSURqInASjaHHWyzFxqrJgXta/CbpGUp6rTJKMrpNFP5V0jm1DZxo4W7R9lcMAqGuhMW8G/YV6AelTVhXh6eGOvU1V18xshhfM8RsFycgtckjY2l7tAta96v5jn3lXj9fQf/al+ovdJ+kn2FP8rVL7LP8A8kX7mvmXrEYuYrKVm4MLe77qG5Py84ZXby6/eudgA61ZkAARAAEQABEAARWLQDD6+YUOENeT7oNL3tHWcc9qXUc98lGGvXr1ehSUf65X/wDkv2JleTOKjbzuLjgxnn/tQHKGTZptniQPqteUE2m1e26/MfR6C4qjrTxqqtatLVjxlL5Ihqmj9STu6kW3vvcsoOeWmZL+e/esSLqk5lls8PBzqNaqaV0+JiyvDSxN3Ss1F2bexIkPKFXtQpw6dS/9KufXk+p2w030qr90UiMdRx+0c2L2spAUDPYjUEm97Dgn/wCcq9KHi/2PmnleIoyU4K7XRe/uLWDs/DotRcdqjtkLBhKrnBScXF86expmc8PTuaCBYrJeGWjWcetcDGDXPBHOwxyAEHcVsjlfE4PYbEKQhiYvnt2n3ykekvFEWCsS8kaZzrse5o4ZFTjOUMwFnNB7wt+pikt234GlUqOTuz5PSXw/BqWh96MXdxOvZwUfWYlPVZPNhwGi8IXym4fXwUZr/Tqwl3NOPzRNnxn2F5fA16e9ulK3bHaveiP5RN2RBP8AK/PqKkuTkuzM5nEeS4gAD1XZAAEQABEAARAAkEXVfJhhdTCSqv8A1Kt12RWr8Uydk7tvqPMnwn0fB0aW5xpxT9pq8vfcGvk6znHz1PzO2R1D7qm8pJryNjG6578vJegAtCrKAAIqN5R6np0IfhlL32JjQWNsHF8Z1P1Fd8oM74mC4Ul72WXQn7FT9qf6mRkZvWO6vRWCoGzhTBxPqp0HoJNQC8ARtrDR6XwOKsr4aS3Ok53tYE6dS6aeklqL82BlxIHmtUG39Fju1jVmrNrgY0eJ09W4tiJyF8wRl26r2oopqcAyAa2yIK8AB3rkQABF4bmCd1KJpmfCStLt2EVjdOZ6GRg1tcdYzXfhk3NVTHdNu9cWz3Bchia9Ldq1JW7G7r3M0C6eVLA6mJhWW6rTs/ahs+DXgUsh6ObnoGP4j7L6Q3RAAdK9QABEAARCb0Ny76RjaMGrxjLlJ9kNvxsQh0XyWYNRhiMTLioLqUVrP4+446+fmadzhroOs5LF5sLq6Yye1LgYCDq5/JtvUXPzs+fPsugvFllw2gdS0rIgNBn1nM+K+Y1tUJ53SX1OXVoFPAgfPsugvFjz7LoLxZ3c2/guXbbxU8CB8+y6C8WPPsugvFjm38E228VVdPX/AIv/AG6fwLToNK+Cp+3U/UymaW4l1cRrtW9CK2dSJrRPNnTw+oop2nLe7b9pEQNPtrhvzVlqiPwqM7sleAQHn2XQXiz3z7LoLxZL82/gq1tt4qwUt67jZrfxY9xWsLncnOC1FtcVvfOyXxuPccXTpaqtLV29rZAYix3trMv4cnkPRS9E5ppnfzsW8/4v98DBivWl2mvLHv6ZyWqrce4j80ziUK1SCgnqytv6jmwlrjPDl/AH+S3Yg4czJn/FPkpQED59l0F4sefZdBeLLRzb+CgttvFTwIHz7LoLxY8+y6C8WObfwTbbxU6ep22kD59l0F4sefZdBeLBicciF7zjRmCs3lIwXK4LlEttKcZ9dmrP4+45IdswdVYzC1qckleM4Nb9jjs+ZxetTcZSi98ZNPtTsUeijNPLNSn4HZdR0X0zDqgT07ZBvA9PovgAEiu1AAEQABEOs5BT5DKIcznDW7eUkvkzkx2PGx1cuopblCiv/Uj6wbc1PGdDI3zXFiLyylkcNwPkqyAD6IV8oQAHiIAAirukS+tT4w+ZtaNz9Ga/En7jFpJHbTfU0Ychras5LjH4WK7JIIK8udp9lbwOdwaw3DyKsZ5c1ZVG+c+TdJjbQfcZfrNlU9hSeAa5Wnt+9H4k/mf2+j/t/FlVy/8Ai0vbh8SyZu/8yofk+ZBVuKbdWx7m/wAOQa8Qpmhb/wDK/wDqR+azz/mK7v0kPnv2ir7XyRKTn/mduz9BF559ore38kdGBTMkqYgN0AH9y3Yl+jL/AFj/AIrRABcVXUAARADwL1WDRCtapOHShfvT/Zs59ppheSx2IitznrL8yu/fcu+jD/xMOtT/AEsrnlQp2xkX0qMb9zZSMUHN4xl8cY7wVfuTEhdSlvAkfVVAAGxWVAAEQABEOx5NUWKyunba+SS/NDZ8veccL/5Ls21ZVMLJ+t6dPt3SXhZ+JGYox3NCVn5mEOHYtU8YkjLTvC+QSekOB5Ks7L0Z+r2c6IwvtHVMqoGzs0cL+o7F8nqIHQSuidqDZAAdK0IAfNSVkYveGNLnaBeqJ0hV4R/DL4oicuqatSL60vFkxmMNanLsv4Ir6drMptROZ5C87/JXPA7S0bojxI7wrSemOhPWjF8YoyHKqm9pa4tO7LuWfL/4tL2o/EsmbfzKh+T5lby7+LS9qPxLJm/8yofk+ZG1X67f5X+SlqH/AKzv6kfmlT+aLtX6CGz6VsVW9v5Imqn80Xd+gg9IvtVb2/kjCge5k0bmmxEY81uxEf8ADL/VP+KxRlc9NahKztxNk+j0NV7RFtb9D++lVwixQAHYvEAEVd2XPuCKf0Rw16kqj3RVl2v/AIuU7ylYlTxziv8ATpwi+3a/mjo1HVwWEc57NSDlPrlbd8EcVx2KlWq1Kst85uT73uPnftHt2JS1LfyN91vT+9e5fTMEpDTUzWnXU9ZWAAEiphAAEQABEM2DxMqVSFWDtKElKL60YQCL5Iu04LFU8zwinFpSttXPTmt6fUVfEUJU5OE1Zp7SqaOZ7UwVXlIbYvZUi901+/WdSoVsNmdJTpySkl1KpB8JLgcVBWvweUteCYHHd8B9FXMawf2oc5H+ceI4eiqgN/MMqqUX6SvHmlHau/gaBeqepiqGCSJwc07x+8lQ5oZIX7EgIKGvXe23A2DTk9rI7GZdmEM+Y+SwaM18yjdNcVYrFWNpNcGy0kFm1LVqX6Sv72VkFWTk/PszujPxDxC3cnrXg49F+52JAr2W1tSouD2MsAIXPjdNzVSXDR2fbvWXCVFGpCT3RnFvuZMY/Nac8ZTrq+rHVvs27G77CDBofC17g46gEd6j4ql8bCxuhIPaNFOyzWm8csRt1Ozb6ttxG5tiFVr1Kkd0pXV9nMjUBjHTMjII3DZ7FlNWSStc11s3bXavDcpyurmoZsO96J3B5tifY+YeK43aLMAfdGjKb1YRcm+ZbS0EhoudFgASbBfBZNGsq2qvUWxeon+o+ss0fUPrMQ1s26vMvaZXtMdNU4yw+EezdOot1ujD9ym4vjZqgaShN75OfuA3gH99CtmDYE/bE04tbQfU+i0/KJpIq0/otKV6dOX1jW6clzdi+JSAz00U1O2CMRt0CuwFhZAAb16gACIAAiAAIhnweLqUZqdKcoSW5xdvHiYAeEAixRdEyDyhJpU8ZHq14rY/aj+xYquUUMTHlcNUjt6DvB9q5jjJuZbmdbDS16NSUH1eq+1c5H+xPgfztG8xu/tPWFyVVDDUt2ZGgq947LqlF2nGy5mtsX3kbyHWSmS+UCnUSp4yCjfZrRV4PtXMTlfJaOIjymGnHbu1XrQf7Hc3GmOLWYnHs20c2+z9vFVCu5NyR3dTm44HXvVR5DrMc8Gpesk+1XJPGYGpRdpxa4PfF95rFhiw+ilYHx5g7wb/AFVbfzkT7G4PcVp/QIdGHgjJyHWbANv4TS/L4lYule7U3WHkOs85DrM4H4TS/L4lY7RWDkOsch1mc9jFtpJXb3JbWeHCqUZ7PifVLla/IdZkw9Bt2inJvmS2lgy7Ryc7SqvUXDfJ/sZMwz/BZenGNp1OjC0pfmlzFfqcTw+mk2aVhkkHAmw6zopyhwGpqM3+63x7l85fo3KVpVnqLgvW7+B7mek2DwEXCklUn0adm7/ilzFGz7TLE4q8VLkqb+7T2Nr8Ut7K2R8zKuuN6x/u/I3IdvFXGhwinpBdgz4nVTefaUYjGNqc9SHNCGyPfxIQA6442Rt2WCw6FKgWQAGaIAAiAAIgACIAAiAAIgACIb2V5vWw0tajUcOK3xfajRBi5ocLEXCLp2S6e0ayVPFwVNvZrb6b7eBLYrIKdVcphpqz2pXvB9j5jjRKZNn1fCO9Go0ueMvSg+44WUstK4yUTyw726tPouGrw6CqbsyNv59+qt+Kws6T1ZxcX7n2MxExk2mOGxiVLExVKb2elthJ/hlzGXNNH3Ba9F68d9t8l2cSdoeUTXPENY3m37j8J6ju7VS8R5PzU93xe83xHr2dyggjay/LqleWrBbF6ze6JPVXhMuhr1ppztsvtnL2YndiWNwUR5v88h0a3M9u4BcOH4TPWZtybxP0Whl2j9SpaU/q49frPuNzG5rgsuja6lPhG0qj7eBTNINPK9e8KH1EN2zbUl38xUZSbbbbbe9va33lXndW4hnVP2WfI36nUq70GC09LmBd3E6/ZWfP9NsRibxg+Rpvmh6zXXIq7YB0QwRwt2Y2gDoUyBZAAbUQABEAARAAEQABEAARAAEQABEAARAAEQABELRozplVwjUKl6tK+1N3nD2X8irg1TQxzN2JBcJa66Xn+ndKnBRwSUpTV3K1owv1c8jnWLxU603OpNzk97ltf/BhBqpqOKnHua7ydT2rFrA0WCAA6lkgACIAAiAAIgACIAAiAAIv/9k=" height = "10px" width = "10px" /> <span>WI</span>
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
