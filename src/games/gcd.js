import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) return a;

  return getGcd(b, a % b);
};

const getQuestionValue = () => getRndNumber();

const isCorrectAnswer = (userAnswer, rightAnswer) => +userAnswer === rightAnswer;

const getRightAnswer = (arg1, arg2) => getGcd(arg1, arg2);

const getGameGcdData = () => {
  const questionValue1 = getQuestionValue();
  const questionValue2 = getQuestionValue();
  const question = `${questionValue1} ${questionValue2}`;
  const rightAnswer = getRightAnswer(questionValue1, questionValue2);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameRules, isCorrectAnswer, getGameGcdData);
};
