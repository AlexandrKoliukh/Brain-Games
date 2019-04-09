import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
const getUserAnswer = () => readlineSync.question('Your answer: ');

let userName;

export const greeting = () => {
  userName = getUserName();
  console.log(`Hello, ${userName}!`);
};

export const createQuestion = (questionCount) => {
  const correctAnswer = 'Correct!';
  const checkCorrectAnswer = (userAnswer, rightAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;

  for (let i = 0; i < questionCount; i += 1) {
    const questionValue = Math.floor(Math.random() * 100);
    console.log(`Question: ${questionValue}`);

    const userAnswer = getUserAnswer();

    const varAnswer1 = questionValue % 2 === 0 && userAnswer === 'yes';
    const varAnswer2 = questionValue % 2 !== 0 && userAnswer === 'no';

    if (varAnswer1 || varAnswer2) console.log(correctAnswer);
    else {
      const rightAnswer = userAnswer === 'yes' ? 'no' : 'yes';
      console.log(checkCorrectAnswer(userAnswer, rightAnswer));
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
