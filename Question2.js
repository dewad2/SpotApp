// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
  let counts = [];
  let letters = [];
  let internalStr = '';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (10 > Number(s[i]) > 0) {
      counts.push(Number(s[i]));
    } else if (s[i] !== ']') {
      letters.push(s[i]);
    } else {
      j = letters.length - 1;

      while (letters[j] !== '[') {
        let popped = letters.pop();
        internalStr += popped;
        j--;
      }

      letters.pop(); //remove the '[' you just reached from the letters array

      let numOfRepeats = counts.pop();
      for (let j = 0; j < numOfRepeats; j++) {
        result += internalStr;
      }

      for (let k = result.length - 1; k >= 0; k--) {
        letters.push(result[k]);
      }

      result = '';
      internalStr = '';
    }
  }
  return letters.join('');
}

module.exports = decodeString;
