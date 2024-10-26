import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState.cartItems);
  // console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart(clearCart));
  };

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
      <button
        className="mt-2 link link-primary link-hover text-sm"
        onClick={handleClearCart}
      >
        clear
      </button>
    </div>
  );
};
export default CartItemsList;
