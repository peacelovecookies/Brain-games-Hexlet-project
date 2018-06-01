import { sayHi, randomNum, toPlay } from '..';

const operators = ['+', '-', '*'];
const operations = {
  '+': (arg1, arg2) => String(arg1 + arg2),
  '-': (arg1, arg2) => String(arg1 - arg2),
  '*': (arg1, arg2) => String(arg1 * arg2),
};

const task = 'What is the result of the expression?';
const userName = sayHi(task);
const roundsNum = 5;
const gameProperties = {
  userName,
  getArgs: () => [randomNum(1, 40), randomNum(1, 40)],
  getOperator: () => [operators[randomNum(0, 2)]],
  makeExpression: (args, operator) => `${args[0]} ${operator} ${args[1]}`,
  askQuestion: expression => `Result of the expression: ${expression}?`,
  findAnswer: (args, operator) => String(operations[operator](args[0], args[1])),
};
const farewell = `Congratulations, ${userName}! You are as hot as a calculator ;)`;

export default toPlay(roundsNum, gameProperties, farewell);
