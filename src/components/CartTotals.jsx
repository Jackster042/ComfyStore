import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  // console.log(cartTotal, shipping, tax);
  // if (cartTotal.length === 0) {
  //   state.shipping = 0;
  //   return null;
  // }

  return (
    <div className="card bg-base-300">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>Subtotal:</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>Shipping:</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between text-xs border-b border-base-200 pb-2">
          <span>Tax: </span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* TOTAL */}
        <p className="mt-4 flex justify-between text-sm pb-2">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
