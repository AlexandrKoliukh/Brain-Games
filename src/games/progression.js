import makeGame from '..';
import getNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionWithHiddenElement = (startValue, step, indexOfHiddenElement) => {
  const progression = new Array(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== indexOfHiddenElement) {
      progression[i] = startValue + step * i;
    } else {
      progression[i] = '..';
    }
  }
  return progression;
};

const getGameProgressionData = () => {
  const startValue = getNumber(0, 10);
  const step = getNumber(0, 50);
  const indexOfHiddenElement = getNumber(0, progressionLength - 1);
  const question = getProgressionWithHiddenElement(startValue, step, indexOfHiddenElement).join(' ');
  const rightAnswer = (startValue + step * indexOfHiddenElement).toString();
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameProgressionData);
};
