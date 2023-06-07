import random from 'random';

// eslint-disable-next-line import/extensions
import { maxNumber, minNumber } from './env.js';

console.log('Hello world');
console.log('Your min number: ', minNumber);
console.log('Your max number: ', maxNumber);

console.log(
  'Here is your random number: ',
  random.integer(+minNumber, +maxNumber),
);
