import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = arg => arg % 2 === 0;

const getGameEvenData = () => {
  const question = getRndNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameEvenData);
};
