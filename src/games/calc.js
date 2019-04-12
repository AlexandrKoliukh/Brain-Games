import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const mathOperators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const getRightAnswer = (arg1, arg2, operator) => {
  switch (operator) {
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    case '*': return arg1 * arg2;
    default: return null;
  }
};

const getGameCalcData = () => {
  const value1 = getRndNumber(0, 50);
  const value2 = getRndNumber(0, 50);
  const mathOperator = mathOperators[getRndNumber(0, mathOperators.length - 1)];
  const question = `${value1} ${mathOperator} ${value2}`;
  const rightAnswer = getRightAnswer(value1, value2, mathOperator);
  const stringRightAnswer = rightAnswer.toString();
  return cons(question, stringRightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameCalcData);
};
