#!/usr/bin/env node

import { sayHi, randomNum, askPlayer, checkAnswer } from '..';

const task = 'Answer "yes" if number even otherwise answer "no"';
const userName = sayHi(task);

const toPlay = (rounds) => {
  for (let i = 0; i < rounds; i += 1) {
    const num = randomNum(1, 20);
    console.log(`Is this number even: ${num}?`);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    const userAnwer = askPlayer();
    if (!checkAnswer(rightAnswer, userAnwer, userName)) return;
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};

toPlay(3);
