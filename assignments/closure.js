// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let addTo = function (passed){
  
  let add = function(inner){
    return passed + inner;
  }
  
  return add;
}

let addThree = addTo(3);
let addFour = addTo(4);

console.log(addThree(1));
console.log(addFour(1));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
  let num = 0;
  return function () {
    return ++num;
  }
};
let incrementedNum = counter();
console.log(incrementedNum());
console.log(incrementedNum());
console.log(incrementedNum());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
