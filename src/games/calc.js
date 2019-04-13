import makeGame from '..';
import getNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const gameDescription = 'What is the result of the expression?';

const mathExpressions = [
  cons('+', (a, b) => (a + b)),
  cons('-', (a, b) => (a - b)),
  cons('*', (a, b) => (a * b)),
];

const getGameCalcData = () => {
  const value1 = getNumber(0, 50);
  const value2 = getNumber(0, 50);
  const expression = mathExpressions[getNumber(0, mathExpressions.length - 1)];
  const mathSign = car(expression);
  const mathFunc = cdr(expression);
  const question = `${value1} ${mathSign} ${value2}`;
  const rightAnswer = mathFunc(value1, value2).toString();
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameCalcData);
};
