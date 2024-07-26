import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import {BrowserRouter as Router,Switch,Router} from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD24/ACQ/T2/GW/PC-hero-new-kv_-3000x1200_2._CB570221731_.jpg"
            alt="not found banner"
          />

          <div className="home_row">
            <Product
              id={1}
              title="The Alchemist | Panlo Coelho"
              price={19.99}
              image="https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UY327_FMwebp_QL65_.jpg"
              rating={4}
            />
            <Product
              id={2}
              title="Atomic Habits | James Clear"
              price={20.99}
              image="https://m.media-amazon.com/images/I/81IL8Dy4vmL._AC_UY327_FMwebp_QL65_.jpg"
              rating={4}
            />

            {/* product 2 */}
          </div>
          <div className="home_row">
            {/* product1  */}
            <Product
              id={3}
              title="Dopmaine Detox | Thibaut Meurisse "
              price={25.99}
              image="https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg"
              rating={4}
            />
            <Product
              id={4}
              title="Meditations | Marcus Aurelius "
              price={1.5}
              image="https://m.media-amazon.com/images/I/81ZeeOjADFL._AC_UY327_FMwebp_QL65_.jpg"
              rating={4}
            />
            <Product
              id={5}
              title="Three Thousand Stiches | Sudha Murty"
              price={20.99}
              image="https://m.media-amazon.com/images/I/81beaZVtFML._AC_UY327_FMwebp_QL65_.jpg"
              rating={4}
            />

            {/* product 2 */}
            {/* product 3 */}
          </div>

          <div className="home_row">
            <Product
              id={6}
              title="AirPods Max | Space Greay Edition "
              price={20.99}
              image="https://m.media-amazon.com/images/I/81jqUPkIVRL._SX679_.jpg"
              rating={3}
            />

            {/* product 1 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
