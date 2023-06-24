export const validatePass = (Pass: string, setValue: Function) => {
  const trimmedName = Pass.trim();

  if (trimmedName.length === 0 || trimmedName.length > 13) {
    return false;
  }

  return true;
};
