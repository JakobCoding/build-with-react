// DESTRUCTURING ARRAYS & OBJECTS
//const userName = ["Jake", "Chalmers"];

// const [firstName, lastName] = ["Jake", "Chalmers"]; 
// console.log(firstName);
// console.log(lastName);

// CREATING AN OBJECT //
// const {name: userName, age} = {
//   name: "Jake",
//   age: 39
// };

// console.log(userName);
// console.log(age); 





// Array & Array Methods like map()
// const hobbies = ["sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// // access JavaScript uitlity methods with dot notation
// hobbies.push("Working"); // adds working to hobbies array
// console.log(hobbies); // shows full list of array in terminal

// const index = hobbies.findIndex((item) => {
//   return item === "sports";
// });

// console.log(index); // returns index of sports in the console

// // shorter way of writing the above arrow fucntion 
// const index1 = hobbies.findIndex((item) => item === "sports");
// console.log(index1)

// // very common utility method map() method
// const editedHobbies = hobbies.map((item) => item + "!"); // add ! to every item in array
// console.log(editedHobbies);

// const objectHobbies = hobbies.map((item) => ({text: item})); // Turns arrary into object list
// console.log(objectHobbies);


// Revisiting Objects & Classes 
// How to create an object 
// const user = {
//     name: "Jake",
//     age: 39,
//     greet() {
//         console.log("hello!", user.name);
//         console.log(this.age);
//     }
// };
// use dot notation to access a value in an object
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greet();


// Arrow functions aka anonamous functions 

// anonamous function that doesn't have a name
//export default function() {
    //console.log('Hello')
//}

// anamous functions also can be written 
//export default() => {
    //console.log('Hello'); 
//}

/*
More on the Arrow Function Syntax
When working with Arrow Functions, you have a couple of "syntax shortcuts" available.

Most importantly, you should know about the following alternatives:

1) Omitting parameter list parentheses

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

Instead of

(userName) => { ... }
you could write

userName => { ... }
Please note: 

If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

2) Omitting function body curly braces

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of

number => { 
  return number * 3;
}
you could write

number => number * 3;
The following code would be invalid:

number => return number * 3; // invalid because return keyword must also be omitted!
number => if (number === 2) { return 5 }; // invalid because if statements can't be returned
3) Special case: Just returning an object

If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

number => { age: number }; // trying to return an object
This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

number => ({ age: number }); // wrapping the object in extra parentheses
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.
*/


// revisiting funtions & Parameters 
// functions must only have one return statement

// function greetUser(userName, message = "Hello") {
//     console.log(userName);
//     console.log(message);
//     return "Hi, Iam " + userName + "" + message;
// }

// const greeting2 = greetUser("Jake", " Hello, What's up!");
// console.log(greeting2)


// import { apiKey } from "./util.js";
// import { myName } from "./util.js";
// import { course } from "./util.js";

// importing default from util.js
// import apiKey from "./util.js"

// console.log(apiKey)

// console.log(apiKey, myName, course);

// import * as util from "./util.js";
// console.log(util.apiKey);

