// Question 3 -- changePossibilities(amount, amount): Your quirky boss collects rare, old coins.They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

//   Example: for amount = 4(4¢) and denominations = [1, 2, 3](1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

//   1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denoms) {
  let subAmountCount = new Array(amount + 1).fill(0);
  for (let i = 0; i < denoms.length; i++) {
    let coin = denoms[i];
    subAmountCount.forEach((count, subAmount) => {
      if (coin <= subAmount) {
        if (subAmount - coin === 0) {
          subAmountCount[subAmount] += 1;
        } else {
          subAmountCount[subAmount] += subAmountCount[subAmount - coin];
        }
      }
    });
  }
  return subAmountCount.pop();
}

module.exports = changePossibilities;
