export const calcTotal = ((subTotal, discount) => {
    return (Number(subTotal) - Number(discount) - 12).toFixed(2);
})