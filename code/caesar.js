const caesar = (function factory() {
  // Add function
  function process(string, shiftAmount) {
    if (string === undefined) {
      throw new Error('No argument passed to function');
    }

    if (typeof string !== 'string') {
      throw new Error('Argument passed is not a string');
    }

    if (shiftAmount === undefined) {
      throw new Error('No value given to the shiftAmount argument');
    }

    if (typeof shiftAmount !== 'number') {
      throw new Error('shiftAmount is not a number');
    }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const tempWorkingArray = [];

    function newIndex(index, shift) {
      const shiftedIndex = index + shift;
      if (shiftedIndex > 25) {
        return shiftedIndex - 26;
      }
      return shiftedIndex;
    }

    const stringArray = string.split(/(?=[\s\S])/u);

    stringArray.forEach((character) => {
      const lowerCharacter = character.toLowerCase();

      const isEqual = (element) => element === lowerCharacter;
      const alphabetIndex = alphabet.findIndex(isEqual);

      if (alphabetIndex !== -1) {
        const newLetter = alphabet[newIndex(alphabetIndex, shiftAmount)];
        tempWorkingArray.push(newLetter);
      } else {
        tempWorkingArray.push(character);
      }
    });

    return tempWorkingArray.join('');
  }

  return {
    process,
  };
}());

export default caesar;
