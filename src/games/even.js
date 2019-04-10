import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = arg => arg % 2 === 0;

const getQuestion = () => getRndNumber();

const getRightAnswer = (question) => {
  if (isEven(question)) return 'yes';
  return 'no';
};

const isCorrectAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

const getGameEvenData = () => {
  const question = getQuestion();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameRules, isCorrectAnswer, getGameEvenData);
};
