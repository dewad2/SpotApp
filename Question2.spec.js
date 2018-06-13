const { expect } = require('chai');
const decodeString = require('./Question2');

describe('decodeString', () => {
  it('given an encoded string, returns its corresponding decoded string', () => {
    expect(decodeString('2[b3[a]]')).to.deep.equal('baaabaaa');
  });
});
