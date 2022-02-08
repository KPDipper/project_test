import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

const UpdateGame = () => {

    const [gamename, setGamename]= useState("")
    const [playername, setPlayername]= useState("")




    const dispatch= useDispatch()
  return <>
      <input type={"text"} onChange={e=>setGamename(e.target.value)}/>
      {/* here onChange={e=>setGamename(e.target.value)} yesko kam tai yedi textbox ma yedi value change bhyo then event will trigger then that value will 
      be stored in use state variable called (gamename) */}

      <button onClick={()=>dispatch({type:'UPDATE_GAME',payload:gamename})}>Update</button>
       <br></br>
      <input type={"text"} onChange={e=>setPlayername(e.target.value)}/>
      <button onClick={()=>dispatch({type:'UPDATE_PLAYER',payload:playername})}>Update</button>


      {/* here payload ma tai game name ko value store huncha ra gamereducer ma jancha ra action ma bascha*/}

  </>;

};

export default UpdateGame;
