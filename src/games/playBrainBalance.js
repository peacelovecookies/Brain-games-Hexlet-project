#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const balanceNumber = (num) => {
  const arrOfDigits = String(num).split('').map(Number);
  const sumOfDigits = arrOfDigits.reduce((acc, digit) => acc + digit, 0);
  const iter = (sum, result, digitsAmmount) => {
    if (sum % digitsAmmount === 0) {
      const currentDigit = String(sum / digitsAmmount);
      let newResult = result;
      for (let i = digitsAmmount; i > 0; i -= 1) {
        newResult += currentDigit;
      }
      return newResult;
    }

    const currentDigit = Math.floor(sum / digitsAmmount);
    const newSum = sum - currentDigit;
    const newResult = result + String(currentDigit);
    return iter(newSum, newResult, digitsAmmount - 1);
  };
  return iter(sumOfDigits, '', arrOfDigits.length);
};

const task = 'Balance the given number.';

const playBrainBalance = () => {
  const gameProperties = () => {
    const num = randomNum(300, 9999);
    const question = `Balance these number: ${num}?`;
    const rightAnswer = balanceNumber(num);
    return { question, rightAnswer };
  };
  toPlay(task, gameProperties);
};

export default playBrainBalance;
