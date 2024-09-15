// 1. Write a function `greet(name)` that takes a person's name as a parameter and
// returns a greeting like `"Hello, John!"`. Test it with the name `"Alice"`.
function greet(name) {
  console.log(`"Hello ${name}"`);
}
greet("alice");

// 2. Create an object `dog` with properties `name` and `breed`. Display the `name`
// and `breed` of the dog in the console.
var dog = { name: "popy", breed: "american" };
console.log(
  " the dog name is " + dog.name + " and the breed of dog is " + dog.breed
);

//  3. Create an array `fruits` with three fruit names. Print the first fruit in the array.

var fruits = ["orange", "banana", "apple"];
console.log(fruits[0]);

// 4. Write a function `doubleNumber(x)` that returns the double of a number. Use
// it to double the number `5`.

function doubleNumber(x) {
  console.log((x += x));
}
doubleNumber(5);

// Create an object `student` with properties `name` and `grade`. Add a method
// `showGrade()` that prints the student's grade to the console.
const student = {
  name: "ahmad",
  grade: 90,
  showGrade: function () {
    console.log(
      ` his/her name is ${this.name} and his/her grade is ${this.grade}`
    );
  },
};
console.log(student.showGrade());

// 6. Write a function `isPositive(number)` that checks if a number is positive. Use it
// to check if `-3` is positive.
function isPositive(number) {
  if (number < 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}
isPositive(-3);

// 7. Create an array `colors` with five different color names. Print the length of the
// array.
var colors = ["blue", "red", "green", "yellow", "gray"];
console.log(colors.length);

// 8. Create an object `phone` with properties `brand` and `model`. Print the 
// `brand` of the phone.
const phone={
    brand:"samsung",
    model:"M13"
}
console.log(phone.brand);
