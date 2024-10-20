import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

const locale = "en-US";
const currency = "USD";

// export const formatPrice = (price) => {
//   const dollarsAmount = new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currency,
//   }).formatPrice((price / 100).toFixed(2));
//   return dollarsAmount;
// };

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

// AMOUNT OPTION DYNAMICALLY SET
export const generateAmount = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option value={amount} key={amount}>
        {amount}
      </option>
    );
  });
};
