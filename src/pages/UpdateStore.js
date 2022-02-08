import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

const UpdateStore = () => {
  const dispatch =useDispatch()//usedispatch le tai type value lai action ma pathucha cartreducer ma bhako.here type abha add to cart remove the cart ma parcha
  //main action tai cartreducer mai huncha

const cartvalue= useSelector(store=>store.cartValue)
  return <div>
    <button onClick ={()=>dispatch({type:"ADD"})}>Add to Cart</button>
    {/* here hamile yo reducer ma pathune ho tesaile yesko lagi store.cartValue */}

    {cartvalue.cart_value >0 &&<button onClick ={()=>dispatch({type:"REMOVE"})}>Remove from Cart</button>}
    

  </div>;
};

export default UpdateStore;
