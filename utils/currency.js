export const formatCurrency = (amount, currency) => {
  const amountFloat = Number(amount).toFixed(2)

  return currency === 'IDR'
    ? amountFloat + ` ${currency}`
    : '$' + amountFloat + ` ${currency}`
}
