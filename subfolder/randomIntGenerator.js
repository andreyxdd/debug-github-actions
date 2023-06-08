import random from 'random';

// eslint-disable-next-line import/extensions
import { maxNumber, minNumber } from './env.js';

console.log('maxNumber',maxNumber)
console.log('minNumber',minNumber)

export const randomIntInARange = random.integer(+minNumber, +maxNumber);
export const dummy = '';
