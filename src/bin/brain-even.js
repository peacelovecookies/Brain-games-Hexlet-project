#!/usr/bin/env node

import { sayHi, randomNum, toPlay } from '..';

const task = 'Answer "yes" if number even otherwise answer "no"';
const userName = sayHi(task);

const num = randomNum(1, 20);
const question = `Is this number even: ${num}?`;
const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
toPlay(userName, question, rightAnswer);
