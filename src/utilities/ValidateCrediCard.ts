export const validateCreditCardNumber = (
  cardNumber: string,
  setValue: Function,
) => {
  // Loại bỏ bất kỳ ký tự không phải chữ số hoặc khoảng trắng
  cardNumber = cardNumber.replace(/\D/g, '');
  var formattedNumber = cardNumber.slice(0, 4);
  for (var i = 4; i < cardNumber.length; i += 4) {
    formattedNumber += ' ' + cardNumber.slice(i, i + 4);
  }
  setValue(formattedNumber.trim());
  // Kiểm tra xem số thẻ có phải là chữ số và có độ dài từ 13 đến 16 chữ số hay không
  if (!/^\d{13,16}$/.test(cardNumber)) {
    return false; // Số thẻ không hợp lệ
  }

  // Áp dụng thuật toán Luhn
  var sum = 0;
  var doubleUp = false;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var digit = parseInt(cardNumber.charAt(i), 10);

    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
};

export const validateCvvCode = (cvvCode: string, setValue: Function) => {
  // Loại bỏ bất kỳ ký tự không phải chữ số hoặc khoảng trắng
  cvvCode = cvvCode.replace(/\D/g, '');
  setValue(cvvCode);
  // Kiểm tra xem số thẻ có phải là chữ số và có độ dài từ 13 đến 16 chữ số hay không
  return cvvCode.length === 3;
};
