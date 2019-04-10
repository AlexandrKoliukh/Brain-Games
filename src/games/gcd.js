import {
  getUserAnswer,
  outQuestion,
  outWin,
  outLose,
  outCorrect,
  getRndNumber,
} from '..';

const gcd = (a, b) => {
  if (b === 0) return a;

  return gcd(b, a % b);
};

export default (questionCount = 3) => {
  console.log('Find the greatest common divisor of given numbers.\n');
  for (let i = 0; i < questionCount; i += 1) {
    const questionValue1 = getRndNumber();
    const questionValue2 = getRndNumber();
    const question = `${questionValue1} ${questionValue2}`;
    const rightAnswer = gcd(questionValue1, questionValue2);
    outQuestion(question);
    const userAnswer = getUserAnswer();
    if (+userAnswer === rightAnswer) outCorrect();
    else {
      outLose(userAnswer, rightAnswer);
      return;
    }
  }
  outWin();
};
