export const gameQuestion = 'Find the greatest common divisor of given numbers.';

export const brainGcd = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  let count = 1;
  let result = 0;
  while (count < Math.min(num1, num2) + 1) {
    if (num1 % count === 0 && num2 % count === 0) {
      result = count;
    }
    count += 1;
  }
  const question = `${num1} ${num2}`;
  const rightAnswer = result;

  return [question, rightAnswer];
};
