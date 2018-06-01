#!/usr/bin/env node

import { sayHi, randomNum, toPlay } from '..';

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, (a % b));
};

const task = 'Find the greatest common divisor of given numbers.';
const userName = sayHi(task);
const roundsNum = 3;
const gameProperties = {
  userName,
  getArgs: () => [randomNum(1, 500), randomNum(1, 100)],
  getOperator: '',
  makeExpression: args => `${args[0]}, ${args[1]}`,
  askQuestion: expression => `GCD of these numbers: ${expression}?`,
  findAnswer: (args) => {
    const sortedArgs = args.sort((a, b) => a < b);
    return String(findGCD(sortedArgs[0], sortedArgs[1]));
  },
};
const farewell = `Congratulations, ${userName}! You are rocking dat hausse ;)`;

export default toPlay(roundsNum, gameProperties, farewell);
