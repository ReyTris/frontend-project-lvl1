#!/usr/bin/env node

import { brainPrime, gameQuestion } from '../games/brain-prime-engine.js';
import engine from '../src/index.js';

const brainPrimeGame = () => {
  engine(brainPrime, gameQuestion);
};

brainPrimeGame();
