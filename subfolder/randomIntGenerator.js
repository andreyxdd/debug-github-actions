import random from 'random'
import { maxNumber, minNumber } from './env.js';

export const randomIntInARange = random.integer(+minNumber, +maxNumber)
