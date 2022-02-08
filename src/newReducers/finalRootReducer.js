import {combineReducers} from "redux";
import itemsreducer from "./itemsreducer"

import newcartreducer from "./newcartreducer"



//hami yesma tai duitai reducer combine garna ko lagi ho

const finalRootReducer=combineReducers({

    items:itemsreducer,
    cart: newcartreducer,

})

export default finalRootReducer;