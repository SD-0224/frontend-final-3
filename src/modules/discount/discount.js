export const calcDiscount = ((products) => {
    let totalDisount = 0;
    products?.map((product) => {
        return totalDisount += (product.price * product.discount) * (product.quantity / 100)
    })
    return totalDisount.toFixed(2);
})