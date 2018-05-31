import readlineSync from 'readline-sync';

export const sayHi = (task) => {
  console.log(`Welcome to the Brain Games!\n\n${task}\n`);
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}\n`);
  return userName;
};

export const askPlayer = () => {
  const userAnwer = readlineSync.question('Your answer: ');
  return userAnwer;
};

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const toPlay = (userName, question, rightAnswer) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(question);
    const userAnwer = askPlayer();

    if (rightAnswer !== userAnwer) {
      console.log(`\nSorry, but ${userAnwer} is wrong answer =( While right answer was ${rightAnswer}). Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};
