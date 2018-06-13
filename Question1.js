// Question 1 -- sortByStrings(s, t): Sort the letters in the string s by the order they occur in the string t.You can assume t will not have repetitive characters.For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings(s, t) {
  let result = '';
  const sHash = {};
  for (let i = 0; i < s.length; i++) {
    if (!sHash[s[i]]) {
      sHash[s[i]] = 1;
    } else {
      sHash[s[i]]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (sHash[t[j]]) {
      for (let k = 0; k < sHash[t[j]]; k++) {
        result += t[j];
      }
    }
  }
  return result;
}

module.exports = sortByStrings;
