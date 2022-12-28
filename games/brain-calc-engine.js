export const gameQuestion = 'What is the result of the expression?';

const isCalculate = (char, num1, num2) => {
  if (char === '+') {
    return num1 + num2;
  } if (char === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

export const brainCalc = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const char = ['+', '-', '*'][Math.floor(Math.random() * 3)];

  const question = `${num1} ${char} ${num2}`;
  const rightAnswer = isCalculate(char, num1, num2);

  return [question, rightAnswer];
};
