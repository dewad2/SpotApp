const { expect } = require('chai');
const sortByString = require('./Question1');

describe('twoSum', () => {
  it('sorts the letters in the string s by the order they occur in the string t', () => {
    expect(sortByString('weather', 'therapyw')).to.deep.equal('theeraw');
  });
});
