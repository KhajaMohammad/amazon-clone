import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is basket ", basket);
  const addToBasket = () => {
    console.log("inside addtobasket dispatch");
    //dispatch item to datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map(() => {
                return <p>⭐</p>;
              })}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
