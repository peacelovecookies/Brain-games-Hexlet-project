#!/usr/bin/env node

import { sayHi, randomNum, findGCD, askPlayer, checkAnswer } from '..';

const task = 'Find the greatest common divisor of given numbers.';
const userName = sayHi(task);

const toPlay = (rounds) => {
  for (let i = 0; i < rounds; i += 1) {
    const [num1, num2] = [randomNum(1, 40), randomNum(1, 100)].sort((a, b) => a < b);
    console.log(`GCD of these numbers: ${num1}, ${num2}?`);

    const rightAnswer = String(findGCD(num1, num2));
    const userAnwer = askPlayer();
    if (!checkAnswer(rightAnswer, userAnwer, userName)) return;
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};

toPlay(3);
