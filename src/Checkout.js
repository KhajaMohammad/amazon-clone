import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD24/ACQ/T1/plus1pages/2b_pc.gif"
          alt="ad banner "
        />
        <div>
          <h2 className="checkout_title">Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProducts
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
          {/* checkout product */}
        </div>
      </div>
      {/*end left checkout*/}
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
