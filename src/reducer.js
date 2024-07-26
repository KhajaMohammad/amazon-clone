export const initialState = {
  basket: [],
};

export const totalBasketValue = (basket) =>
  basket?.reduce((num, CurrentVal) => {
    return (num += CurrentVal.price);
  }, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("inside case 1 ");
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      console.log("printing action ", action);
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("printing  basket", newBasket);
        console.warn(
          `cant remove product (id: ${action.id} as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
