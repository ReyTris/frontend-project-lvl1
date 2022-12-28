import readlineSync from 'readline-sync';

import greeting from './cli.js';

const engine = (game, gameQuestion) => {
  const name = greeting();
  console.log(gameQuestion);

  let i = 0;
  let endGame = `Congratulations, ${name}!`;

  while (i < 3) {
    const [question, rightAnswer] = game();
    console.log(`Question: ${question}`);
    const myAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) === String(myAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      endGame = `'${myAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(endGame);
};

export default engine;
