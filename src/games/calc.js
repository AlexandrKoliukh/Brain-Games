import makeGame from '..';
import getRndNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const gameDescription = 'What is the result of the expression?';

const mathExpressions = [
  cons('+', (a, b) => (a + b)),
  cons('-', (a, b) => (a - b)),
  cons('*', (a, b) => (a * b)),
];

const getGameCalcData = () => {
  const value1 = getRndNumber(0, 50);
  const value2 = getRndNumber(0, 50);
  const expression = mathExpressions[getRndNumber(0, mathExpressions.length - 1)];
  const question = `${value1} ${car(expression)} ${value2}`;
  const rightAnswer = cdr(expression)(value1, value2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameCalcData);
};
