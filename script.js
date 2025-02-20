'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks

// Array.prototype.some()
// Is at least one person 19 or older?
const atLeast19 = people.some(
  person => new Date().getFullYear() - person.year >= 19
);

// Array.prototype.every()
// Is everyone 19 or older?
const isEveryone19 = people.every(
  person => new Date().getFullYear() - person.year >= 19
);

// Array.prototype.find()
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
comments.splice(index, 1);
