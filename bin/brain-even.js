#!/usr/bin/env node
import greeting, { questionAnswerGame } from '../src/cli.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const limitRandom = 101;
const rounds = 3;

const brainEvenGame = () => {
  const [name] = greeting();
  console.log(question);

  let i = 0;
  let right = `Congratulations, ${name}!`;

  while (i < rounds) {
    const [rigtAnswer, myAnswer] = questionAnswerGame(limitRandom);
    if ((rigtAnswer % 2 === 0 && myAnswer === 'yes') || (rigtAnswer % 2 !== 0 && myAnswer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else {
      right = `'${myAnswer}' is wrong answer ;(. Correct answer was ${myAnswer === 'yes' ? "'no'" : "'yes'"}.\nLet's try again, ${name}!`;
      break;
    }
  }

  console.log(right);
};

brainEvenGame();
