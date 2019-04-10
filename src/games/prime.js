import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGamePrimeData = () => {
  const question = getRndNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGamePrimeData);
};
