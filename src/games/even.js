import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = arg => arg % 2 === 0;

const getRightAnswer = (question) => {
  if (isEven(question)) return 'yes';
  return 'no';
};

const getGameEvenData = () => {
  const question = getRndNumber();
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameEvenData);
};
