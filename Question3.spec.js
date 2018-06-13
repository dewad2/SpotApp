const { expect } = require('chai');
const changePossibilities = require('./Question3');

describe('changePossibilities', () => {
  it('computes the number of ways to make the amount of money with coins of the available denominations', () => {
    expect(changePossibilities(4, [1, 2, 3])).to.deep.equal(4);
  });
});
