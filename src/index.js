import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

export const getUserName = () => userName;

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const outQuestion = question => console.log(`Question: ${question}`);

export const outWin = () => console.log(`Congratulations, ${userName}!`);
export const outLose = (userAnswer, rightAnswer) => console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);

export const outCorrect = () => console.log('Correct!');

export const getRndNumber = (max = 100, min = 1) => Math.floor(Math.random() * (max - min) + min);
