import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  const Items_in_cart = useSelector((store) => store.cart.cart_items); //here yo tai newCartreducer ma bhayeko user le jun jun book now garyo
  //tyo value array ma bascha newcartreducer ko initialdata.so now hamile useselector use garera hami abha cart js ma use garchyou

  const dispatch = useDispatch(); //o tai yedi kunai actio perform garnu cha on type

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        {/* ternary operator
  
    condition ? value if true: value if false */}
        {/* here jaba hamile ternary operator use garcyoum then jaba cart ma kei items hunna then Items_in_cart.length zero huncha so hamro condition anusar
     yedi tyo zero bhanda kam bhyo bhane condition false huncha ra table display hunna */}

        {Items_in_cart.length > 0 ? (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Items_in_cart.map(
                (
                  item,
                  i //here map function ko properties tai i bhy
                ) => (
                  //jasle hami id no. 1 ,2,3,4,5etc dincha//here item tai map function ko key bhyo

                  <tr>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={item.item_image}
                        alt=""
                        style={{ height: "150px" }}
                      ></img>
                    </td>
                    <td
                      style={{
                        maxWidth: "110px",
                        overflow: "hidden",
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                    >
                      {item.item_name}
                    </td>
                    <td style={{ fontFamily: "cursive" }}>{item.item_price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART",payload:item })}//payload tai kun tai item remove garna ko lagi ho tesaile
                        style={{ fontFamily: "cursive" }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                )
              )}

              <tr>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "Empty the cart" })}
                  >
                    Empty the cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h2>You have no items in the cart</h2>
        )}

        {/* <Footer/> */}
      </div>

    </>
  );
};

export default Cart;
