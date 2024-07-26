import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProducts({ id, image, title, price, rating }) {
  const [{basket},dispatch]=useStateValue();
const removeFromBasket=()=>{



  dispatch({type:"REMOVE_FROM_BASKET",id:id})

}
  return (
    <>
      <div className="checkoutProduct">
        <img alt={title} src={image} className="checkoutProduct_Image" />
        <div className="checkoutProduct_info">
          <p className="checoutProduct_title">{title}</p>
          <p className="checoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map(() => {
                return <p>⭐</p>;
              })}
          </div>
          <button onClick={removeFromBasket} className="removeButton">Remove from Basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProducts;
