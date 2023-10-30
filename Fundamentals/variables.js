// Variables are containers that can store values

// ======== Example 1 ===============
let name = 'Tom';
let age = 21;
next_year_age = age + 1;

console.log(
	'Hello ' + name + '. You will be ' + next_year_age + ' in next year.'
);

// In Programming ( Variable naming is important )
// We can't use reserved words such as (let, const, var, etc.)

// ======== Example 2 =================
let movie = 'Big Hero 6';
let rating = 7.8; // decimal value
console.log('This movie: ' + movie + "'s rating is " + rating);

// Const
// constant variable are like other variable but it can't change the value

// ========= Example 3 ===================
const PI = 3.14159;
console.log('PI value is ' + PI);

const monthsInAYear = 12;
console.log('There are ' + monthsInAYear + ' months in a year.');
// console.log((monthsInAYear += 13));  // This will cause error because it can't modify value

// Var
// Var was the first variable naming keyword (Before let and const var was the only way of declaring variable)

// ======== Example 4 ====================
var chicken = 20;
chicken++; // using double plus ++ aka unary operator
console.log('The total chicken = ' + chicken);

// Undary Operators
// ========== Example 5 ===================
let people = 0;
people = people + 10; // normal style
people += 10; // unary operator style

people = people - 5;
people -= 5;

people = people * 5;
people *= 5;

people = people / 5;
people /= 5;

people = people + 1;
people++;

people = people - 1;
people--;
console.log('The total people: ' + people);

// Boolean

let activeNow = true;
if (activeNow == true) {
	console.log('User is now active');
} else {
	console.log('Last Seen recently');
}
// Variable can change data type but not recommanded

let sleep = true;
sleep = 987; // this change the data type of sleep (This is dangerous)
console.log(sleep);

// String
// String is pieces of characters or pieces of text
let userName = 'helloSir';
console.log(userName);
console.log(typeof userName); // check the data-type

let firstName = 'Zip';
let secondName = 'Maggie';
let fullName = firstName + ' ' + secondName;
console.log(fullName);
