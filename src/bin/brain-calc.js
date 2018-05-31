#!/usr/bin/env node

import { sayHi, randomNum, toPlay } from '..';

const task = 'What is the result of the expression?';
const userName = sayHi(task);

const num1 = randomNum(1, 40);
const num2 = randomNum(1, 40);
const question = `Result of the expression: ${num1} + ${num2}?`;
const rightAnswer = String(num1 + num2);
toPlay(userName, question, rightAnswer);
