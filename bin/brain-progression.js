#!/usr/bin/env node

import { brainProgression, gameQuestion } from '../games/brain-progression-engine.js';
import engine from '../src/index.js';

const brainProgressionGame = () => {
  engine(brainProgression, gameQuestion);
};

brainProgressionGame();
