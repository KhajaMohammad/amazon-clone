import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { totalBasketValue } from "./reducer";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  const [{ basket }] = useStateValue();
  // let sum = 0;
  // basket.forEach((ele) => {
  //   sum += ele.price;
  // });
  // console.log("loging sum", sum);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal for {basket.length} items is :<strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                Does this contain a Gift ?
              </small>
            </>
          );
        }}
        prefix="$"
        displayType={"text"}
        decimalScale={2}
        thousandSeparator="true"
        value={totalBasketValue(basket)}
      />
      <button className="checkout_button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
