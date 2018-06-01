import { sayHi, randomNum, toPlay } from '..';

const balanceNumbers = (sum, result, digitsAmmount) => {
  if (sum % digitsAmmount === 0) {
    const currentDigit = String(sum / digitsAmmount);
    let newResult = result;
    for (let i = digitsAmmount; i > 0; i -= 1) {
      newResult += currentDigit;
    }
    return newResult;
  }

  const currentDigit = Math.floor(sum / digitsAmmount);
  const newSum = sum - currentDigit;
  const newResult = result + String(currentDigit);
  return balanceNumbers(newSum, newResult, digitsAmmount - 1);
};

const task = 'Balance the given number.';
const roundsNum = 3;

const playBrainBalance = () => {
  const userName = sayHi(task);
  const gameProperties = {
    userName,
    getArgs: () => [randomNum(300, 9999)],
    getOperator: () => '',
    makeExpression: args => `${args[0]}`,
    askQuestion: expression => `Make these number balanced: ${expression}`,
    findAnswer: (args) => {
      const arrOfDigits = String(args[0]).split('');
      const sumOfDigits = arrOfDigits.reduce((acc, digit) => acc + digit, 0);

      return balanceNumbers(sumOfDigits, '', arrOfDigits.length);
    },
  };
  const farewell = `Wow! ${userName}, I see you found my algorithm of balance numbers on repl.it or you are just have an awesome brains ;)`;

  toPlay(roundsNum, gameProperties, farewell);
};

export default playBrainBalance;