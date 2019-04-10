import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numQuestions = 3;

export default (gameRules, isCorrectAnswer, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(gameRules);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < numQuestions; i += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isCorrectAnswer(userAnswer, rightAnswer)) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
