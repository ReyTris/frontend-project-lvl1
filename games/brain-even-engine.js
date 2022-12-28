export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

export const brainEven = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const question = randomNum;
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

  return [question, rightAnswer];
};
