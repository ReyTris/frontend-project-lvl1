export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const brainPrime = () => {
  const num = Math.floor(Math.random() * 100);

  const question = `${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, rightAnswer];
};
