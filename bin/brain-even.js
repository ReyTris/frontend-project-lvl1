#!/usr/bin/env node
import { brainEven, gameQuestion } from '../games/brain-even-engine.js';
import engine from '../src/index.js';

const brainEvenGame = () => {
  engine(brainEven, gameQuestion);
};

brainEvenGame();
