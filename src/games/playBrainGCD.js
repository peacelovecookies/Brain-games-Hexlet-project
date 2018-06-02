#!/usr/bin/env node

import toPlay from '..';
import { randomNum } from '../utils';

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, (a % b));
};

const task = 'Find the greatest common divisor of given numbers.';

const playBrainGCD = () => {
  const gameProperties = () => {
    const num1 = randomNum(1, 50);
    const num2 = randomNum(1, 100);
    const sortedArgs = [num1, num2].sort((a, b) => a < b);
    const question = `Find GCD of these numbers: ${num1}, ${num2}?`;
    const rightAnswer = String(findGCD(sortedArgs[0], sortedArgs[1]));
    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};


export default playBrainGCD;
