import { combineReducers } from "redux";
import cartreducer from "./cartreducer";
import gamereducer from "./gamereducer";

const rootreducer = combineReducers({  //yedi duitai reducer eutai mai use garnu paryo bhnae hami combineReducers use garchyou

    cartValue:cartreducer,//hamile abha cartValue ra gameValue nayavariable banayium ra combinereducer ma gayera combine garyoum

    gameValue:gamereducer

}); 
      
    
export default rootreducer;