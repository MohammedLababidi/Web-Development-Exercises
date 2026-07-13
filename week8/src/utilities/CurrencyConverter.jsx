export function convert(price, currency) {
  if(currency === 'USD') return `$${price}`
  if(currency === 'SYP') return `${(price * 13000).toLocaleString()} SYP`
}