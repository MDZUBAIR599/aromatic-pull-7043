import * as types from "./actiontypes";
 import axios  from "axios";
 const getPlayers = ()=> (dispatch)=>{
  dispatch({type : types.GET_PLAYERS_REQUEST})
 return  axios.get("http://localhost:8080/players")
  .then((e)=>{dispatch({type: types.GET_PLAYERS_SUCCESS, payload : e.data});})
  .catch((err)=>dispatch({type : types.GET_PLAYERS_FAILURE, payload : err})); 
} 

export default getPlayers ;