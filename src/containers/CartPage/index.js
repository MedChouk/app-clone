import React from "react";
import { Card } from "./../../components/UI/Card/index";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import "./style.css";

/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  return (
    <Layout>
      <div className="cartContainer">
        <Card
          headerLeft={`My Cart`}
          headerRight={<div>Deliver to</div>}
          style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
        >
          {/* {JSON.stringify(cartItems)} */}
          {Object.keys(cartItems).map((key, index) => (
            <div key={index} className="flexRow">
              <div className="cartProductContainer">
                <img src="" />
              </div>
              <div className="cartItemDetails">
                <div>{cartItems[key].name} - qty - {cartItems[key].qty}</div>
                <div>Delivery in 3 - 5 days</div>
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ width: "500px" }}>Price</Card>
      </div>
    </Layout>
  );
};
