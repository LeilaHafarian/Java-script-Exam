
let op = null;
let numbers = [];

const setOperator = (newOp) => {
  op = newOp;
}

const addNumber = (numberString) => {
  numbers.push(parseInt(numberString));
  if (numbers.length < 2) {
    return numbers[0];
  }

  try {
    if (op === null) {
      return 'error: no operator';
    }

    switch (op) {
      case '+': return numbers[0] + numbers[1];
      case '-': return numbers[0] - numbers[1];
      default: return 'error: ivnalid operator';
    }
  } finally {
    op = null;
    numbers.splice(0, numbers.length);
  }
}

export default {
  setOperator,
  addNumber
};
