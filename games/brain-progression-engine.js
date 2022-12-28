export const gameQuestion = 'What number is missing in the progression?';

export const brainProgression = () => {
  const stepProgress = Math.floor(Math.random() * 11);
  let startProgress = Math.floor(Math.random() * 50);
  const progress = [startProgress];
  let count = 0;

  while (count < 10) {
    startProgress += stepProgress;
    progress.push(startProgress);
    count += 1;
  }

  const randomIndex = Math.floor(Math.random() * 9);
  const rightAnswer = progress[randomIndex];
  progress[randomIndex] = '..';
  const question = progress.join(' ');

  return [question, rightAnswer];
};
