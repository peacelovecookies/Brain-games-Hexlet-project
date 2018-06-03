#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const isPrime = (num) => {
  let d = 2;
  while (d * d <= num && num % d !== 0) {
    d += 1;
  }
  return d * d > num ? 'yes' : 'no';
};

const task = 'Answer "yes" if number prime otherwise answer "no"';

export default () => {
  const gameProperties = () => {
    const num = randomNum(1, 100);
    const question = `Is this number prime: ${num}?`;
    const rightAnswer = isPrime(num);
    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};
