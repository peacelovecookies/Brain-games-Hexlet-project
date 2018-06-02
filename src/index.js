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
    const args = properties.getArgs();
    const question = properties.question(args);
    const currentOperator = properties.getOperator();
    const rightAnswer = properties.findAnswer(args, currentOperator);
    console.log(`Question: ${question}`);
    const usersAnswer = askPlayer();
    if (rightAnswer !== usersAnswer) {
      console.log(`\nSorry, but ${usersAnswer} is wrong answer =( While right answer was ${rightAnswer}. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}! You are clevear ;)`);
};

export default toPlay;
