import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const mathOperators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const getRightAnswer = (arg1, arg2, operator) => {
  switch (operator) {
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    default: return arg1 * arg2;
  }
};

const getGameCalcData = () => {
  const questionValue1 = getRndNumber(50);
  const questionValue2 = getRndNumber(50);
  const questionMathOperator = mathOperators[getRndNumber(mathOperators.length - 1)];
  const question = `${questionValue1} ${questionMathOperator} ${questionValue2}`;
  const rightAnswer = getRightAnswer(questionValue1, questionValue2, questionMathOperator);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameCalcData);
};
