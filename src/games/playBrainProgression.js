#!/usr/bin/env node

import toPlay from '..';
import randomNum from '../utils';

const task = 'Find missing number in all following progressions.';

export default () => {
  const gameProperties = () => {
    let a = randomNum(1, 20);
    const d = randomNum(1, 10);
    const n = 10;
    const missedNumPosition = randomNum(0, 9);
    const progression = [];
    let rightAnswer;
    for (let i = 0; i < n; i += 1) {
      if (i === missedNumPosition) {
        progression.push('...');
        rightAnswer = String(a);
        a += d;
      }
      progression.push(a);
      a += d;
    }
    const question = `Which number is missed: ${progression.join(' ')}?`;

    return { question, rightAnswer };
  };

  toPlay(task, gameProperties);
};
