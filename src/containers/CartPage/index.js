import React, { useState, useEffect } from "react";
import { Card } from "./../../components/UI/Card/index";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { CartItem } from './CartItem/index';
import { addToCart, } from "../../actions";
/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityIncrement = (_id, qty) => {
    console.log({_id, qty});
    // console.log(cartItems[_id]);
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    console.log({_id, qty});
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };


  return (
    <Layout>
      <div className="cartContainer"  style={{ alignItems: "flex-start" }}>
        <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to</div>}
          
        >
          {/* {JSON.stringify(cartItems)} */}
          {Object.keys(cartItems).map((key, index) => 
            <CartItem 
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            />
            // <div key={index} className="flexRow">
            //   <div className="cartProductContainer">
            //     <img src="" />
            //   </div>
            //   <div className="cartItemDetails">
            //     <div>{cartItems[key].name} - qty - {cartItems[key].qty}</div>
            //     <div>Delivery in 3 - 5 days</div>
            //   </div>
            // </div>
          )}
        </Card>
        <Card
        headerLeft='Price'
        style={{ width: "500px" }}>
          
        </Card>
      </div>
    </Layout>
  );
};
