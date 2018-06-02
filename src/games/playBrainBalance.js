#!/usr/bin/env node

import toPlay from '..';
import { randomNum } from '../utils';

const balanceNumbers = (sum, result, digitsAmmount) => {
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
  return balanceNumbers(newSum, newResult, digitsAmmount - 1);
};

const task = 'Balance the given number.';

const playBrainBalance = () => {
  const gameProperties = () => {
    const num = randomNum(300, 9999);
    const question = `Balance these number: ${num}?`;
    const arrOfDigits = String(num).split('');
    const sumOfDigits = arrOfDigits.reduce((acc, digit) => acc + Number(digit), 0);
    const rightAnswer = balanceNumbers(sumOfDigits, '', arrOfDigits.length);
    return { question, rightAnswer };
  };
  toPlay(task, gameProperties);
};

export default playBrainBalance;
