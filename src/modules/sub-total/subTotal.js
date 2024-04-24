export const calcSubTotal = ((products) => {
    let subTotal = 0;
    products?.map((product) => {
        return subTotal += (product.price * product.quantity)
    })
    return subTotal.toFixed(2);
});