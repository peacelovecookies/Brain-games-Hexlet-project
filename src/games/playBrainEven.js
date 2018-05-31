#!/usr/bin/env node

import { sayHi, randomNum, askPlayer, checkAnswer } from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const playBrainEven = () => {
  const task = 'Answer "yes" if number even otherwise answer "no"';
  const userName = sayHi(task);
  const roundsNum = 3;

  const toPlay = (rounds) => {
    for (let i = 0; i < rounds; i += 1) {
      const question = randomNum(1, 20);
      const rightAnswer = isEven(question);

      console.log(`Is this number even: ${question}?`);
      const userAnwer = askPlayer();

      if (checkAnswer(rightAnswer, userAnwer)) return;
    }
    console.log(`Congratulations, ${userName}! You are a clever one ;)`);
  };

  toPlay(roundsNum);
};

export default playBrainEven;
