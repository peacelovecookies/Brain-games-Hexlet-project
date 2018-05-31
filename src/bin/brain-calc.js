#!/usr/bin/env node

import { sayHi, randomNum, askPlayer, checkAnswer } from '..';

const task = 'What is the result of the expression?';
const userName = sayHi(task);

const toPlay = (rounds) => {
  for (let i = 0; i < rounds; i += 1) {
    const num1 = randomNum(1, 40);
    const num2 = randomNum(1, 40);
    const operators = ['+', '-', '*'];
    const expression = `${num1} ${operators[randomNum(0, 2)]} ${num2}`;

    console.log(`Result of the expression: ${expression}?`);

    const rightAnswer = eval(expression);
    const userAnwer = askPlayer();
    if (!checkAnswer(rightAnswer, userAnwer, userName)) return;
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};

toPlay(5);
