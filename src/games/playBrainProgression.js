#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const task = 'Find missing number in all following progressions.';

export default () => {
  const gameProperties = () => {
    let currentNum = randomNum(1, 20);
    const adjunctionNum = randomNum(1, 10);
    const numbersCount = 10;
    const missedNumPosition = randomNum(0, 9);
    const progression = [];
    let rightAnswer;
    for (let i = 0; i < numbersCount; i += 1) {
      if (i === missedNumPosition) {
        progression.push('...');
        rightAnswer = String(currentNum);
        currentNum += adjunctionNum;
      }
      progression.push(currentNum);
      currentNum += adjunctionNum;
    }
    const question = `Which number is missed: ${progression.join(' ')}?`;

    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};
