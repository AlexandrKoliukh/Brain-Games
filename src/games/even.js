import makeGame from '..';
import getNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = arg => arg % 2 === 0;

const getGameEvenData = () => {
  const question = getNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameEvenData);
};
