#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, (a % b));
};

const task = 'Find the greatest common divisor of given numbers.';

const playBrainGCD = () => {
  const gameProperties = {
    getArgs: () => [randomNum(1, 500), randomNum(1, 100)],
    getOperator: () => '',
    question: args => `${args[0]}, ${args[1]}`,
    findAnswer: (args) => {
      const sortedArgs = args.sort((a, b) => a < b);
      return String(findGCD(sortedArgs[0], sortedArgs[1]));
    },
  };

  toPlay(task, gameProperties);
};


export default playBrainGCD;
