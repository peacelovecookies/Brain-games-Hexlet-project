import readlineSync from 'readline-sync';

export const sayHi = (task) => {
  console.log(`Welcome to the Brain Games!\n\n${task}\n`);
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}\n\nNow let's play!`);
  return userName;
};

export const askPlayer = () => {
  const userAnwer = readlineSync.question('Your answer: ');
  return userAnwer;
};

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const toPlay = (rounds, properties, farewell) => {
  for (let i = 0; i < rounds; i += 1) {
    const args = properties.getArgs();
    const currentOperator = properties.getOperator();
    const expression = properties.makeExpression(args, currentOperator);
    const rightAnswer = properties.findAnswer(args, currentOperator);
    console.log(properties.askQuestion(expression));
    const usersAnswer = askPlayer();
    if (rightAnswer !== usersAnswer) {
      console.log(`\nSorry, but ${usersAnswer} is wrong answer =( While right answer was ${rightAnswer}. Let's try again, ${properties.userName}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(farewell);
};
