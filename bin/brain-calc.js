#!/usr/bin/env node

import { brainCalc, gameQuestion } from '../games/brain-calc-engine.js';
import engine from '../src/index.js';

const brainCalcGame = () => {
  engine(brainCalc, gameQuestion);
};

brainCalcGame();
