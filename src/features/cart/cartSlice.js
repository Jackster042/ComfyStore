import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const dynamicShipping = () => {
//   localStorage.getItem("cart");

//   if (state.cartTotal > 0) {
//     state.shipping = 500;
//   } else {
//     state.shipping = 0;
//   }
// };
// const dynamicShipping = (state) => {
//   localStorage.getItem("cart");
//   if (state.cartTotal === 0) {
//     state.shipping = 0;
//   } else {
//     state.shipping = 500;
//   }
// };

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  // shipping: dynamicShipping(),
  // shipping: test(),
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  //   initialState: defaultState,
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      //   console.log(state.numItemsInCart);

      state.cartTotal += product.price * product.amount;
      //   localStorage.setItem("cart", JSON.stringify(state));
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      // 1st way of handling state items cart wont work if we use shorthand syntax
      //  state.numItemsInCart -= product.amount;
      state.numItemsInCart = state.numItemsInCart - product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      //   console.log(state.orderTotal);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
