import readlineSync from 'readline-sync';

const sayHi = () => {
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}`);
};

export default sayHi;
