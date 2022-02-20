'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function adder(num) {
    if (num === undefined && num !== 0) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
