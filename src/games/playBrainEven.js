#!/usr/bin/env node

import { randomNum, toPlay } from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const task = 'Answer "yes" if number even otherwise answer "no"';

export default () => {
  const gameProperties = {
    getArgs: () => [randomNum(1, 40)],
    getOperator: () => '',
    question: args => args[0],
    findAnswer: args => isEven(args[0]),
  };

  toPlay(task, gameProperties);
};
