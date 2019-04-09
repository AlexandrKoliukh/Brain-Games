import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const isEven = arg => arg % 2 === 0;

  const createQuestion = (questionCount) => {
    const correctAnswer = 'Correct!';
    const checkCorrectAnswer = (userAnswer, rightAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${userName}!`;

    for (let i = 0; i < questionCount; i += 1) {
      const question = Math.floor(Math.random() * 100);
      console.log(`Question: ${question}`);

      const userAnswer = readlineSync.question('Your answer: ');
      const varAnswer1 = isEven(question) && userAnswer === 'yes';
      const varAnswer2 = !isEven(question) && userAnswer === 'no';

      if (varAnswer1 || varAnswer2) console.log(correctAnswer);
      else {
        const rightAnswer = isEven(question) ? 'yes' : 'no';
        console.log(checkCorrectAnswer(userAnswer, rightAnswer));
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  createQuestion(3);
};
