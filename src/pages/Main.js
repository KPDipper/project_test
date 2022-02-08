import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import cartreducer from "../reducer/cartreducer";
// import gamereducer from "../reducer/gamereducer";
import rootreducer from "../reducer/rootreducer";
import DisplayStore from "./DisplayStore";
import DisplayGame from "./DisplayGame";

import UpdateStore from "./UpdateStore";
import UpdateGame from "./UpdateGame";

const Main = () => {
  // const ourstore = createStore(cartreducer); //suppose kasle kei purchase garyo bhane yeta ayera store huncha.so value haru tai
  // //cartreducer ma ayera store huncha

  // const gamestore = createStore(gamereducer); //gmereducer tai class bhyo jasma hami store garchyou value jas hami user bata input linchyou.
  //yo createsore tai object create gareko so that we can display it this page/
 
  // const store =combineReducers()//yedi duitai reducer eutai mai use garnu paryo bhnae hami ombineReducers use garchyou

  const finalStore=createStore(rootreducer)
  return (
    // <Provider store={ourstore}>
    // <DisplayStore/>
    // <UpdateStore/>
    // </Provider>

    //here yesma duitai same provide use garyo bhane collide huncha

    // <Provider store={gamestore}>
    //   {/* yo tai hamile displaystore ma pathauchaum for display */}
    //   <DisplayGame />
    //   <UpdateGame />
    //   {/* <UpdateGame/> */}
    // </Provider>

    <Provider store={finalStore}>
   
    <DisplayStore/>
    <UpdateStore/>

    <DisplayGame />
    <UpdateGame />
    
  </Provider>
  );
};

export default Main;
