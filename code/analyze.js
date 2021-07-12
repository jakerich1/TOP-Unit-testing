/* eslint-disable prefer-destructuring */
const analyze = (function factory() {
  function run(numberArray) {
    if (numberArray === undefined) {
      throw new Error('No argument passed to function');
    }

    if (!Array.isArray(numberArray)) {
      throw new Error('Argument passed is not an array');
    }

    // eslint-disable-next-line no-restricted-globals
    if (numberArray.some(isNaN)) {
      throw new Error('Argument contains non numeric values');
    }

    const analysis = {};
    numberArray.sort();
    const average = (arr) => arr.reduce((acc, v) => acc + v) / arr.length;

    analysis.average = average(numberArray);
    analysis.min = numberArray[0];
    analysis.max = numberArray[(numberArray.length) - 1];
    analysis.length = numberArray.length;

    return analysis;
  }

  return {
    run,
  };
}());

export default analyze;
