export const validateEmptyInputs = (inputs) => {
  for (let input in inputs) {
    if (inputs[input] === null) {
      return false;
    }
  }
  return true;
};

export const validateNegativeValues = (inputs) => {
  for (let input in inputs) {
    if (inputs[input] < 0) {
      return false;
    }
  }
  return true;
};
