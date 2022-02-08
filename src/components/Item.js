//hami yesma tai individual item haru rakchyou jasko value hami itemsreducer bata lyauchum
//hami le items ma column cut garera item ma gayera rakhyou

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Item.css"

const Item = (prop) => {//here value of data tai yeta arugment (prop) ma ayera bascha

const value=prop.data//here hamile hamile data bhyo value prop ma rakhyou ra tesaile value ma transfer gariuym

const dispatch= useDispatch()

  return (
    <>
      <div className="col">
        <div className="card mb-3 shadow-lg">
          <div className="img-container">
          <img src={value.item_image} title={value.item_name} className="card-img-top" alt={value.item_name} />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title text-nowrap" style={{fontFamily:"sans-serif"}} title={value.item_name}>{value.item_name}</h4>
            <h4 className="card-title" style={{fontFamily:"fantasy"}}>{value.item_price}</h4>
            <button className="btn btn-warning"  style={{fontFamily:"cursive"}}  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch({type:"ADD_TO_CART",payload:prop.data})}>Book now</button>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> this code is jaba hamile book now garcyoum so it will give us pop to either conitue shopping(close the pop up) or goes to the cart*/}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Cart Update</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {value.item_name} has been to the cart
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keep Shoping</button>
        <Link to="/cart">
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">View Cart</button></Link>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Item;
