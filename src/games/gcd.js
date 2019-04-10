import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) return a;

  return getGcd(b, a % b);
};

const getGameGcdData = () => {
  const questionValue1 = getRndNumber();
  const questionValue2 = getRndNumber();
  const question = `${questionValue1} ${questionValue2}`;
  const rightAnswer = getGcd(questionValue1, questionValue2);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameGcdData);
};
