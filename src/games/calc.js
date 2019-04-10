import {
  getUserAnswer,
  outQuestion,
  outWin,
  outLose,
  outCorrect,
  getRndNumber,
} from '..';

const mathOperators = ['+', '-', '*'];

export default (questionCount = 3) => {
  for (let i = 0; i < questionCount; i += 1) {
    const questionValue1 = getRndNumber(50);
    const questionValue2 = getRndNumber(50);
    const questionMathOperator = mathOperators[getRndNumber(mathOperators.length, 0)];
    const question = `${questionValue1} ${questionMathOperator} ${questionValue2}`;
    outQuestion(question);
    const userAnswer = getUserAnswer();
    /* eslint-disable */
    // Я хорошо подумал, и вроде бы ничего не мешает использовать eval????
    const rightAnswer = eval(question);
    /* eslint-enable */
    if (+userAnswer === rightAnswer) outCorrect();
    else {
      outLose(userAnswer, rightAnswer);
      return;
    }
  }
  outWin();
};
