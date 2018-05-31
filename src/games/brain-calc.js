import { sayHi, randomNum, askPlayer, checkAnswer } from '..';

const operators = ['+', '-', '*'];
const operations = {
  '+': (arg1, arg2) => String(arg1 + arg2),
  '-': (arg1, arg2) => String(arg1 - arg2),
  '*': (arg1, arg2) => String(arg1 * arg2),
};

const playBrainCalc = () => {
  const task = 'What is the result of the expression?';
  const userName = sayHi(task);
  const roundsNum = 5;

  const toPlay = (rounds) => {
    for (let i = 0; i < rounds; i += 1) {
      const arg1 = randomNum(1, 40);
      const arg2 = randomNum(1, 40);
      const currentOperator = operators[randomNum(0, 2)];
      const question = `${arg1} ${currentOperator} ${arg2}`;

      console.log(`Result of the expression: ${question}?`);

      const rightAnswer = operations[currentOperator](arg1, arg2);
      const userAnwer = askPlayer();
      if (!checkAnswer(rightAnswer, userAnwer, userName)) return;
    }
    console.log(`Congratulations, ${userName}! You are as hot as a calculator ;)`);
  };

  toPlay(roundsNum);
};

export default playBrainCalc;
