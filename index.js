/// index.js

// Task 1: writeCards
function writeCards(names, eventName) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

// Example usage:
// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
// => [
//   "Thank you, Charlie, for the wonderful birthday gift!",
//   "Thank you, Samip, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!",
// ]


// Task 2: countDown
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example usage:
// countDown(5);
// => 5, 4, 3, 2, 1, 0

// Export functions for testing
module.exports = {
  writeCards,
  countDown,
};
