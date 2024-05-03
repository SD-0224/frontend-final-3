const DELIVERY_FEE = 12;
const FIXED_DIGITES = 2;

export const calcDiscount = (products) => {
  let totalDisount = 0;

  products?.map((product) => {
    let quantity = product.orderQuantity || product.quantity;

    if (product.discountPercentage) {
      const discountPercantage = product.discountPercentage / 100;
      const finalPrice = product.price * discountPercantage * quantity;

      totalDisount += finalPrice;
    }
    return totalDisount;
  });

  return Number(totalDisount.toFixed(FIXED_DIGITES));
};

export const calcSubTotal = (products) => {
  let subTotal = 0;

  products?.map((product) => {
    let quantity = product.orderQuantity || product.quantity;
    return (subTotal += product.price * quantity);
  });

  return Number(subTotal.toFixed(FIXED_DIGITES));
};

export const calcTotal = (subTotal, discount) => {
  return Number(subTotal - discount - DELIVERY_FEE).toFixed(FIXED_DIGITES);
};
