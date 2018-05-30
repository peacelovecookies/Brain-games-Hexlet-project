import readlineSync from 'readline-sync';

export const sayHi = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}`);
  return userName;
};

export const askIsEven = () => {
  const userAnwer = readlineSync.question('Your answer: ');
  return userAnwer;
};
