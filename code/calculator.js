const calculate = (function factory() {
  // Add function
  function add(number1, number2) {
    if (number1 === undefined || typeof number1 !== 'number' || number2 === undefined || typeof number2 !== 'number') {
      throw new Error('Problem');
    }
    return number1 + number2;
  }

  // Subtract function
  function subtract(number1, number2) {
    if (number1 === undefined || typeof number1 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    if (number2 === undefined || typeof number2 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    return number1 - number2;
  }

  // Multiply function
  function multiply(number1, number2) {
    if (number1 === undefined || typeof number1 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    if (number2 === undefined || typeof number2 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    return number1 * number2;
  }

  // Divide function
  function divide(number1, number2) {
    if (number1 === undefined || typeof number1 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    if (number2 === undefined || typeof number2 !== 'number') {
      throw new Error('You must provide valid numbers.');
    }
    return number1 / number2;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
}());

export default calculate;
