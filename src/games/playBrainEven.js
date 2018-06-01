#!/usr/bin/env node

import { sayHi, randomNum, toPlay } from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const task = 'Answer "yes" if number even otherwise answer "no"';
const userName = sayHi(task);
const roundsNum = 3;
const gameProperties = {
  userName,
  getArgs: () => [randomNum(1, 40)],
  getOperator: () => '',
  makeExpression: args => args[0],
  askQuestion: expression => `Is this number even: ${expression}?`,
  findAnswer: args => isEven(args[0]),
};
const farewell = `Congratulations, ${userName}! You are a clever one ;)`;

export default () => toPlay(roundsNum, gameProperties, farewell);
