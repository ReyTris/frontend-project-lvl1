import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return [name];
};

export const questionAnswerGame = (limitRandom) => {
  const rightAnswer = Math.floor(Math.random() * limitRandom);
  console.log(`Question: ${rightAnswer}`);
  const myAnswer = readlineSync.question('Your answer: ');

  return [rightAnswer, myAnswer];
};

export default greeting;
