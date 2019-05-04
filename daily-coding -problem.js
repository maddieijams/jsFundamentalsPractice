//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

let list = [10, 15, 3, 7];
let k=17

function equalK(list){
    // for(i=0; i>=list.length; i++){
        let add=list.reduce((a, b) => {
        return a+b
        }, 0)
        console.log(add)
    // }
}

equalK(list)

//Write a function that can determine whether a string is a palindrome in under 100 characters.
//A palindrome is a word, phrase, or sequence of letters that reads the same backwards or forwards. It also makes a great test for checking their ability to handle strings.

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

isPalindrome('moom')

//what will be the output of this function
//Solid understanding of JavaScript functions, objects, closures and hoisting is a must.
//First of all, function definition will be hoisted and it’s possible to define it after the usage (although that isn’t the best practice)

var a = Person('a');
var b = new Person('b');
var c = Person;

function Person(name) {
     this.first_name = name;
}

console.log(a.first_name); //“Cannot read property ‘first_name’ of undefined”
console.log(b.first_name); //the right way, to instantiate an object and will print ‘b’ as expected
console.log(c.first_name); //c is just a reference to a function and will return undefined since the function has no first_name value assigned to it


// A closure is basically when an inner function has access to variables outside of its scope. Closures can be used for things like implementing privacy and creating function factories. A common interview question regarding the use of closures is something like this:

// Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.
const arr = [10, 12, 15, 21];
for(let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(() => {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}