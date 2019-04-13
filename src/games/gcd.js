import makeGame from '..';
import getNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const getGameGcdData = () => {
  const questionValue1 = getNumber();
  const questionValue2 = getNumber();
  const question = `${questionValue1} ${questionValue2}`;
  const rightAnswer = getGcd(questionValue1, questionValue2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameGcdData);
};
