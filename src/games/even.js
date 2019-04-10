import {
  getUserAnswer,
  outQuestion,
  outWin,
  outLose,
  outCorrect,
  getRndNumber,
} from '..';

const isEven = arg => arg % 2 === 0;

export default (questionCount = 3) => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  for (let i = 0; i < questionCount; i += 1) {
    const question = getRndNumber();
    outQuestion(question);
    const userAnswer = getUserAnswer();
    const varAnswer1 = isEven(question) && userAnswer === 'yes';
    const varAnswer2 = !isEven(question) && userAnswer === 'no';

    if (varAnswer1 || varAnswer2) outCorrect();
    else {
      const rightAnswer = isEven(question) ? 'yes' : 'no';
      outLose(userAnswer, rightAnswer);
      return;
    }
  }
  outWin();
};
