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
