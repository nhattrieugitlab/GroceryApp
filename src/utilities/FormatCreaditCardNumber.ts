const formatCardNumber = (cardNumber: string) => {
  let result = '';
  for (let i = 0; i < cardNumber.length; i += 4) {
    if (i == 12) {
      result += cardNumber.substring(i, i + 4) + ' ';
    } else {
      result += '****  ';
    }
  }

  return result.trim(); // Xóa dấu cách thừa ở cuối chuỗi
};
export default formatCardNumber;
