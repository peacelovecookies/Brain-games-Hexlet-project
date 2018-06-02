import readlineSync from 'readline-sync';

const askPlayer = () => {
  const userAnwer = readlineSync.question('Your answer: ');
  return userAnwer;
};

const toPlay = (task, properties) => {
  console.log(`Welcome to the Brain Games!\n\n${task}\n`);
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}\n\nNow let's play!`);

  for (let i = 0; i < 3; i += 1) {
    const { rightAnswer, question } = properties();
    console.log(question);
    const usersAnswer = askPlayer();
    if (rightAnswer !== usersAnswer) {
      console.log(`\nSorry, but "${usersAnswer}" is wrong answer =( While right answer was "${rightAnswer}". ${userName}, let's do it again!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}! You are a clever ;)`);
};

export default toPlay;
