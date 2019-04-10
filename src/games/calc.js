import { getRndNumber, makeGame } from '..';
import { cons } from 'hexlet-pairs';

const mathOperators = ['+', '-', '*'];
const gameRules = 'What is the result of the expression?';

const getRightAnswer = (arg1, arg2, operator) => {
  switch (operator) {
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    case '*': return arg1 * arg2;
    default: return `wrong operator ${operator}`;
  }
};

const isCorrectAnswer = (userAnswer, rightAnswer) => +userAnswer === rightAnswer;

const getQuestionValue = () => getRndNumber(50);
/* Максимальное число при mathOperators.length = 3 в
   функции Math.random будет 2.999, округляется до меньшего floor, и следовательно
   полученное число будет в итервале [0, 2]
   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Example:_Using_Math.random */
const getQuestionMathOperator = () => mathOperators[getRndNumber(mathOperators.length, 0)];
const getQuestion = (arg1, arg2, operator) => `${arg1} ${operator} ${arg2}`;

const getGameCalcData = () => {
  const questionValue1 = getQuestionValue();
  const questionValue2 = getQuestionValue();
  const questionMathOperator = getQuestionMathOperator();
  const question = getQuestion(questionValue1, questionValue2, questionMathOperator);
  const rightAnswer = getRightAnswer(questionValue1, questionValue2, questionMathOperator);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameRules, isCorrectAnswer, getGameCalcData);
};
