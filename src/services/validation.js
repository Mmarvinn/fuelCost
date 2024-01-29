export const validateEmptyInputs = (inputs) => {
  for (let input in inputs) {
    if (input === 'id') continue;
    if (inputs[input] === null) {
      return false;
    }
  }
  return true;
};
