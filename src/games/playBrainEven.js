#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const isEven = num => (num % 2 === 0);

const task = 'Answer "yes" if number even otherwise answer "no"';

export default () => {
  const gameProperties = () => {
    const num = randomNum(1, 100);
    const question = `Is this number even: ${num}?`;
    const rightAnswer = isEven(num) ? 'yes' : 'no';
    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};
