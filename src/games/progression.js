import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = () => {
  const startValue = getRndNumber(0, 10);
  const step = getRndNumber(0, 50);
  const iter = (acc, currentValue) => {
    if (acc.length === progressionLength) return acc;
    const newAcc = [...acc, currentValue];
    return iter(newAcc, currentValue + step);
  };
  return iter([], startValue);
};

const hideElement = (progression, indexOfElement) => {
  const newProgression = [...progression];
  newProgression[indexOfElement] = '..';
  return newProgression;
};

const getGameProgressionData = () => {
  const progression = getProgression();
  const indexOfHiddenElement = getRndNumber(progressionLength - 1);
  const progressionWithHiddenElement = hideElement(progression, indexOfHiddenElement);
  const question = progressionWithHiddenElement.reduce((i, acc) => `${i} ${acc}`, '');
  const rightAnswer = progression[indexOfHiddenElement];
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameProgressionData);
};
