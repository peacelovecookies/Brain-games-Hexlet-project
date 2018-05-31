#!/usr/bin/env node

import { sayHi, randomNum, askPlayer, checkAnswer } from '..';

const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, (a % b));
};

const playBrainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const userName = sayHi(task);
  const roundsNum = 3;

  const toPlay = (rounds) => {
    for (let i = 0; i < rounds; i += 1) {
      const [num1, num2] = [randomNum(1, 40), randomNum(1, 100)].sort((a, b) => a < b);
      const question = `${num1}, ${num2}`;
      const rightAnswer = String(findGCD(num1, num2));

      console.log(`GCD of these numbers: ${question}?`);
      const userAnwer = askPlayer();
      if (!checkAnswer(rightAnswer, userAnwer, userName)) return;
    }
    console.log(`Congratulations, ${userName}! You are rocking dat hausse ;)`);
  };

  toPlay(roundsNum);
};

export default playBrainGCD;
