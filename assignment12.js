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
