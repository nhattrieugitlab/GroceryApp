export const validatePhoneNumber = (phoneNumber: string) => {
  return /^\d{9,9}$/.test(phoneNumber);
};
