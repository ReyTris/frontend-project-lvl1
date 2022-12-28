#!/usr/bin/env node
import { brainGcd, gameQuestion } from '../games/brain-gcd-engine.js';
import engine from '../src/index.js';

const brainGcdGame = () => {
  engine(brainGcd, gameQuestion);
};

brainGcdGame();
