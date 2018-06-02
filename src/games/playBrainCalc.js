#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const operators = ['+', '-', '*'];
const operations = {
  '+': (arg1, arg2) => String(arg1 + arg2),
  '-': (arg1, arg2) => String(arg1 - arg2),
  '*': (arg1, arg2) => String(arg1 * arg2),
};

const task = 'What is the result of the expression?';

const playBrainCalc = () => {
  const gameProperties = () => {
    const arg1 = randomNum(1, 50);
    const arg2 = randomNum(1, 100);
    const currentOperator = operators[randomNum(0, 2)];
    const question = `Result of the expression: ${arg1} ${currentOperator} ${arg2}?`;
    const rightAnswer = String(operations[currentOperator](arg1, arg2));
    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};

export default playBrainCalc;
