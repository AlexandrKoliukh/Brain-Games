#!/usr/bin/env node

import { greeting, createQuestion } from '..';

console.log('Welcome to the Brain Games!\n');

greeting();
console.log('\nAnswer "yes" if number even otherwise answer "no".');
createQuestion(3);
