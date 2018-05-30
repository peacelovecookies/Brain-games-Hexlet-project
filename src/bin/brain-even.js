#!/usr/bin/env node

import { sayHi, askIsEven } from '..';

console.log('Welcome to the Brain Games!\n\nAnswer "yes" if number even otherwise answer "no"');

const userName = sayHi();

const toPlay = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * (20 - 1)) + 1;
    console.log(`Is this number even: ${num}?`);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    const userAnwer = askIsEven();

    if (rightAnswer !== userAnwer) {
      console.log(`Sorry, but ${userAnwer} is wrong answer =( While right answer was ${rightAnswer}). Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};

toPlay();
