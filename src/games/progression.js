import makeGame from '..';
import getRndNumber from '../utils';
import { cons } from 'hexlet-pairs';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const startProgressionValue = getRndNumber();
  const progressionWeight = getRndNumber();
  const progressionArray = new Array(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) progressionArray[i] = startProgressionValue;
    else progressionArray[i] = progressionArray[i - 1] + progressionWeight;
  }
  return progressionArray;
};

const hideElement = (progression, element) => progression.map((i) => {
  if (progression.indexOf(i) === element) return '..';
  return i;
});

const getGameProgressionData = () => {
  const progression = getProgression();
  const indexOfHiddenElement = getRndNumber(progressionLength);
  const progressionWithHiddenElement = hideElement(progression, indexOfHiddenElement);
  const question = progressionWithHiddenElement.reduce((i, acc) => `${i} ${acc}`, '');
  const rightAnswer = progression[indexOfHiddenElement];
  return cons(question, rightAnswer);
};

export default () => {
  makeGame(gameDescription, getGameProgressionData);
};
