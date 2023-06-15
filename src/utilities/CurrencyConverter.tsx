function formatVNCurrencyTypeNumber(money: number) {
  return money.toLocaleString('vi-VN', {style: 'currency', currency: 'vnd'});
}
export default formatVNCurrencyTypeNumber;
