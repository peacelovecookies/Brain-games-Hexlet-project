#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const isPrime = (num) => {
  if (num === 1) return false;
  let divisor = 2;
  while (divisor * divisor <= num) {
    if (num % divisor === 0) return false;
    divisor += 1;
  }
  return true;
};

const task = 'Answer "yes" if number prime otherwise answer "no"';

export default () => {
  const gameProperties = () => {
    const num = randomNum(1, 100);
    const question = `Is this number prime: ${num}?`;
    const rightAnswer = isPrime(num) ? 'yes' : 'no';
    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};
