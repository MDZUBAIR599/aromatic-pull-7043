
import React, { useEffect, useState } from 'react'
import "./singleplayer.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
  
const Singleplayer = () => {    
  const {id} = useParams();
  const players = useSelector((state)=>state.playerreducer.players);
  const [current, setCurrent] = useState([]);
    useEffect(()=>{
      if(players){
        var currentPlayer = players.find((item)=>
        item.id === Number(id));
        setCurrent(currentPlayer);
       }
    },[players,id]);
     
     console.log("cccc",current);
    
  return (
    <div id='maindiv' >
      {/* break */}
         {
            <div id='singlebox' key={current.id}>
            <div id="singlediv">
              <h1>{current.name}</h1>
              <h2>  28 YEARS</h2>
              <div><img src={current.logo} alt="" /> <span><p>{current.country}</p></span></div>
              <h3>Batting Style</h3>
              <p>Right Handed</p>
              <h3>Bowling Style
</h3>
              <p>Right-arm medium</p>
            </div>
            <div id='singlediv2'>
              <img src={current.image} alt="" />
            </div>
           </div>
         }
         
          {/* --------break------- */}
         <div id='carrerbox'>
           <p>Carrer Start</p> 
          <p>Recent</p>
          <p>Fantacy</p>
          <p>Articals</p>
         </div>
         <hr/>
         <div id='status'>
           <div>BATTING STATS</div>
           <div>BOWLING STATS</div>
         </div>
         <hr/>
         <div >
         <table>
  <tr>
    <th>Formate</th>
    <th>Test</th>
    <th>ODI</th>
    <th>T20I</th>
    <th>FC</th>
    <th>listA</th>
    <th>T20s</th>
  </tr>
  <tr>
    <td>Matches</td>
    <td>78 </td>
    <td>78</td>
    <td>89</td>
    <td>78</td>
    <td>90</td>
    <td>89</td>
  </tr>
  <tr>
   <td>Innings</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>Rec. Form</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>Runs</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>Bat S/R</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>Average</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>50s/100s</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
  <tr>
   <td>4s/6s</td>
    <td>65 </td>
    <td>65</td>
    <td>88</td>
    <td>89</td>
    <td>89</td>
    <td>89</td>
  </tr>
</table>
  </div>
     <div id='padding'>

     </div>
         <div id='similar'>
           <div id='similardiv'>SIMILAR PLAYERS</div>
        
           <div id='similarimg'>
            <div>
              <div>
              <img src="https://images.cricket.com/players/65756_headshot_safari.png" alt="" />
              <p>Rishav Pant</p>
              </div>
              
            </div>
            <div>
              <div>
            <img src="https://images.cricket.com/players/5380_headshot_safari.png" alt="" />
            <p>Devid Warner</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/3722_headshot_safari.png" alt="" />
            <p>Shikhar Dhawan</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/3850_headshot_safari.png" alt="" />
            <p>Ravindra Jadeja</p>
            </div>
            </div>
            <div>
            <div>
            <img src="https://images.cricket.com/players/10085_headshot_safari.png" alt="" />
            <p>Glenn Maxwell</p>
            </div>
            </div>
           </div>
         </div>
          {/* Details */}
         <div id='padding'>

          </div>
      <div id='similar'>
        <div id='similardiv'>PLAYER BIO</div>
       
      <div id='detailbox'>
        <div>
        <h3>About</h3>
        </div>
     <div className='detail-pbox'>
     {current.name} is power hitting in the Indian T20 League for Mumbai has made him a name to reckon with for many. But what many may not know is tha

     </div>
        <h2>More</h2>
      </div>
      </div>
    </div>
  )
}

export default Singleplayer