import readlineSync from './node_modules/readline-sync';

export const askName = () => {
    const userName = readlineSync.question('May I have your name, please? ');
    console.log(`Hi, my dear, ${userName}`);
};
