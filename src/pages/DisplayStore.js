import React from 'react';
import { useSelector } from 'react-redux';

const DisplayStore = () => {
const cart= useSelector(store=>store.cartValue)//here it helps to use the value of store from main.js.it helps to use value of store



  return (<div><h1>{cart.cart_value}</h1></div>);//here cart_reducer is initial date we used in cartreducer
};

export default DisplayStore;
