const DELIVERY_FEE = 12;
const FIXED_DIGITES = 2;

export const calcDiscount = (products) => {
  let totalDisount = 0;

  products?.map((product) => {
    if (product.discount) {
      const discountPercantage = product.discount / 100;
      const finalPrice = product.price * product.quantity * discountPercantage;

      totalDisount += finalPrice;
    }
    return totalDisount;
  });

  return totalDisount.toFixed(FIXED_DIGITES);
};

export const calcSubTotal = (products) => {
  let subTotal = 0;

  products?.map((product) => {
    return (subTotal += product.price * product.quantity);
  });

  return subTotal.toFixed(FIXED_DIGITES);
};

export const calcTotal = (subTotal, discount) => {
  return (Number(subTotal) - Number(discount) - DELIVERY_FEE).toFixed(
    FIXED_DIGITES
  );
};
