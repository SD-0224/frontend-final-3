export const toFixed = function (numeric, decimals = 2) {
  const number = Number(numeric);
  const fixed = number.toFixed(decimals);
  const withoutZeros = fixed - 0.0;

  return withoutZeros;
};

export const amountFromPricePercentage = function (price, percentage) {
  const onePercentOfPrice = price / 100;
  const percentageAmount = percentage * onePercentOfPrice;

  return toFixed(percentageAmount);
};
