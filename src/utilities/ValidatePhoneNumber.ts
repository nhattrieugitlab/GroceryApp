export const validatePhoneNumber = (
  phoneNumber: string,
  setValue: Function,
) => {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  let formatPhoneNumber = '';
  if (phoneNumber.length > 3) {
    formatPhoneNumber = phoneNumber.slice(0, 3);
    if (phoneNumber.length > 7) {
      formatPhoneNumber += ' ' + phoneNumber.slice(3, 7);
      if (phoneNumber.length > 11) {
        formatPhoneNumber += ' ' + phoneNumber.slice(7, 11);
      } else {
        formatPhoneNumber += ' ' + phoneNumber.slice(7, phoneNumber.length);
      }
    } else {
      formatPhoneNumber += ' ' + phoneNumber.slice(3, phoneNumber.length);
    }
  } else {
    formatPhoneNumber = phoneNumber;
  }
  setValue(formatPhoneNumber.trim());
  if (/^\d{9,11}$/.test(phoneNumber)) {
    return true;
  } else return false;
};
