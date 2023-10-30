// String
// JS had already build-in function and methods aka (string methods)

// toUpperCase() , toLowerCase(), to
// ============== Example 1 ==================
let message = 'are you there?';
console.log(message.toUpperCase());
console.log(message.toLocaleLowerCase());

// trim()
// trim() method remove the unnecessary white spaces
// =============== Example 2 ===================
let userName = '   Mike               ';
console.log(userName);
console.log(userName.trim());

// indexOf
// show the index number of string variable
// =============== Example 3 =========================
let food = 'MrsWilliamliniseatingicecream';
console.log(food.indexOf('icecream'));

// slice
// slice(,) method cut the string
// =============== Example 4 =======================
let longStr = 'My brother is drinking water after playing football';
console.log(longStr.slice(23, 29)); // index position [ slice(firstIdx, secondIdx) ]

// replace
// replace(,) method replace existing value to another value
// ================ Example 5 ========================
let favSong = 'favourite Song: A Chit Yae Ya Latt';
console.log(favSong.replace('favourite', 'Lovely'));

// String Template Literal
// ================ Example 6 ========================

let instrument = 'guitar';
let sound = 'Ding Ding';
console.log(`${instrument} sound ${sound}`);

let playerLogin = null;
playerLogin = 'Mike';
console.log(`User: ${playerLogin}`);
