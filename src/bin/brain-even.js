#!/usr/bin/env node

import { greeting, createQuestion } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

greeting();
createQuestion(3);
