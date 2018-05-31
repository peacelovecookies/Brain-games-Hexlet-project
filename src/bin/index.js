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

export const checkAnswer = (rightAnswer, userAnwer, userName) => {
  if (rightAnswer !== userAnwer) {
    console.log(`\nSorry, but ${userAnwer} is wrong answer =( While right answer was ${rightAnswer}). Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!\n');
  return true;
};

export const findGCD = (a, b) => {
  if (b === 0) return a;
  return findGCD(b, (a % b));
};
