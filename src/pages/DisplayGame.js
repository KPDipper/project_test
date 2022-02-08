import React from "react";
import { useSelector } from "react-redux";

const DisplayGame = () => {
  const game = useSelector((store) => store.gameValue); //here it jun store provider le hami provide garyo(gamestore) yeta tai hamile use selector le ue garna paucha
//here store.gameValue
  return (
    <div>
      <h1> Name of the game is {game.game_name}</h1>

      <h2>Name of the player is {game.player_name}</h2>
    </div>
  ); //here cart_reducer is initial date we used in cartreducer
};

export default DisplayGame;
