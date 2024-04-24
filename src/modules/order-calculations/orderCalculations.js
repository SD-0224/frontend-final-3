export const calcDiscount = ((products) => {
    let totalDisount = 0;
    products?.map((product) => {
        return totalDisount += (product.price * product.discount) * (product.quantity / 100)
    })
    return totalDisount.toFixed(2);
})

export const calcSubTotal = ((products) => {
    let subTotal = 0;
    products?.map((product) => {
        return subTotal += (product.price * product.quantity)
    })
    return subTotal.toFixed(2);
});

export const calcTotal = ((subTotal, discount) => {
    return (Number(subTotal) - Number(discount) - 12).toFixed(2);
})