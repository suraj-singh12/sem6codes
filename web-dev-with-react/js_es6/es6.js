/*
ES6, also known as ECMAScript 2015, is a version of JavaScript that introduced several new features and improvements to the language. Here are the key topics that fall under an ES6 refresher:

let and const declarations
Arrow functions
Template literals
Destructuring assignments
Default function parameters
Rest and spread operators
Classes
Inheritance and super keyword
Modules
Promises
Generators
Symbol data type
Sets and Maps
Iterators
Proxy and Reflect objects
Template string tags
Array and object methods
Async/await
for...of loops
String methods, including startsWith, endsWith, and includes.
An ES6 refresher is important for developers to understand and take advantage of the new features that ES6 offers, leading to more efficient and readable code.

*/



/*
1=>>>>
let: declare a variable using let and assign a value, you can reassign a value later anytime, but cannot redeclare that variable again
const: declare a variable using const and assign it a value, you can neither reassign nor redeclare it again
*/




// 2=>>>> Arrow functions: (inside arrow functions, return statement is implicit for a single line code)

console.log('\n------------------------------------- ## Arrow Functions -------------------------------------\n')
// Implicit return arrow functions
let multi = (a, b) =>  a * b;
console.log(multi(2, 6));

// Block body arrow functions
multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(2, 3)); // Output: 6
  
// -----------------------------------------------------------
// 1
let hello = () => {
    return 'hi';
}
console.log(hello());

// 2
hello = () => 'hi';             // automatically returns hi
console.log(hello());

// 3
hello = (_) => 'hi';             // automatically returns hi
console.log(hello());

// 4
hello = _ => 'hi';
console.log(hello());
// ------------------

// 5
hello = () => console.log('hi');
hello();

// 6
hello = console.log('hi');
hello;



// with parameters
// Using parentheses to enclose the list of arguments:
let myFunc = (arg1, arg2) => {
    // function body
};


// Omitting the parentheses when there's only one argument:
myFunc = arg1 => {
    // function body
}

myFunc = arg1 => console.log(arg1);


// Using destructuring to extract values from objects or arrays:
myFunc = ({val1, val2}) => {
    // function body
}

myFunc = ([val1, val2]) => {
    // function body
}

// -------------------------------------------------------------


// Anonymous function
let greeting = function() {
    console.log("Hello, world!");
};
greeting(); // Output: "Hello, world!"

setTimeout(function() {
    console.log('Delayed message');
}, 1000);

// the above anonymous fn is a callback function also for setTimeOut() fn. 
// In JavaScript, a callback function is a function that is passed as an argument to another function and is executed inside that function.








// ## 3=>>>> Template literal

console.log('\n------------------------------------- ## Template Literal -------------------------------------\n')
let n = 5;
console.log('value of n =', n);        // traditional 
console.log(`value of n = ${n}`);       // template literal way



multi = (a, b) => a * b;
console.log(5);     // NaN  (not a data type)

// undefined is a special value that a variable can have, it's not a data type. It indicates that the variable has been declared but not assigned any value.
// performing any numeric operation on undefined will give NaN
// performing string concat on undefined does concat as usual.







// 4=>>>> Destructuring Assignments

console.log('\n------------------------------------- ## Destructuring Assignments -------------------------------------\n')
let arr = ['some', 'value', 'lies', 'here'];
let [a, b, c, d] = arr;             // destructuring (assigning individual values of arr[0], arr[1], arr[2], arr[3] to variables a, b, c ,d respectively)
console.log(a, b, c, d);


let p, q, r, s = arr;           // will not work !
console.log(p, q, r, s);        // undefined, undefined, undefined, arr
console.log()


printVals = ([a, b, c, d]) => {
    console.log(a, b, c, d);
}
arr = [1,3,5,6]
printVals(arr);
console.log()



// using objects
console.log('-------- using objects --------------')

let student = {name: 'charlie', marks: '100', cgpa: '9.9'};
let {name, marks, cgpa} = student;                          // it picks the keys name, marks, cgpa.  if you give another variable names, it won't find keys there, and would give undefined!
console.log(name, marks, cgpa);

let {name: usrName, marks: usrMarks, cgpa: usrCgpa} = student;      // if we still want to get different name, this is how renaming is done.
console.log(usrName, usrMarks, usrCgpa);

student = {yourName: 'charlie', yourMarks: '100', yourCgpa: '9.8'};
let {yourName: uName, yourCgpa} = student;             // partial destructuring works to, and partial rename also
console.log(uName, yourCgpa);


myFunc = ({name, age}) => {     // picks the keys as described here {name,  age}
    console.log(name, age);       
}
let userDetails = {name: 'bravo', age: 23};
myFunc(userDetails)

userDetails = {name: 'bravo', game: 'football', age: 23}
myFunc(userDetails);



// Destructuring Examples
console.log('\n---------- Destructuring Examples ----------')
{
    let arr = [1,2,3,[4,5], [6,7,8]]

    let [a, b, c, [d, e], [f,g,h]] = arr            // destructuring the fully nested array
    console.log(a,b,c,d,e,f,g,h);

    [a,b,c,d,e] = arr                   // destructuring the array (see this o/p)
    console.log(a,b,c,d,e);



    // objects
    let student = {
        fname: "Raj", 
        lname: "something",
        marks: 78,
        contact_details: {
            address: "LPU",
            mobile: 9876543210
        }
    }

    let {fname: studName, lname, marks, contact_details: {address: usrAddress, mobile}} = student;      // see it well
    // let {fname, lname, marks, contact_details: {address, mobile}} = student;
    // console.log(fname, lname, marks, address, mobile);   
    console.log(studName, lname, marks, usrAddress, mobile);


    const sumUp = (arr) => {
        if(arr.length == 0) return 0;
        let [val, ...rem] = arr;
        return val + sumUp(rem);
    }

    const sumUp2 = (...arr) => {    // rest
        sum = 0;
        for(elem of arr) sum += elem;
        return sum;
    }
    arr = [1, 2, 3, 4, 5,9];

    sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log('Sum = ', sum(...arr));

    console.log("Sum = ", sumUp(arr));
    console.log("Sum = ", sumUp2(...arr));      // spread
}








// 5=>>>> Default Function parameter

console.log('\n------------------------------------- ## Default Function Parameter -------------------------------------\n')
myFunc = (a, b = 5) => a * b;
console.log(myFunc(2));

myFunc = (a, b = 5) => {
    return a * b;
}
console.log(myFunc(3))







// 6=>>>> Rest & Spread Operators

console.log('\n------------------------------------- ## Rest & Spread Operators -------------------------------------\n')
// The spread operator (`...`) can be used for spreading the elements of an array or object into another array or object, respectively.
// Example for spreading array

console.log('--------- spread: using arrays ----------')
arr = [1, 2, 3, 4, 5];
let arr2 = [0, ...arr, 7];
console.log(arr2);          // [1,2,3,4,5,6,7];

let arr3 = [arr, arr2];     // will give nested arrays, that's not what we want.
arr3 = [...arr, ...arr2];       // works fine, spreads elements of arr and arr2
console.log(arr3)       

// example for spreading objects
console.log('\n---------- spread: using objects ---------')
student = {name: 'alpha', age: 30};
let student2 = {...student, location: 'New Delhi'}      // spreads `student` properties 
console.log(student2);          // {name: 'alpha', age: 30, location: 'New Delhi'}


student = {fname: 'Rohit', lname: 'Sharma'};
let contact_details = {addresss: 'LPU', mobile: 124234123};

let studentDetails = {...student, ...contact_details};      // spreads all properties  of student and contact_details into studentDetails
console.log(studentDetails);


// example for rest for array
console.log('\n--------- rest: using arrays ----------')

printVals = (first, second, ...remaining) => {      // first = 1, second = 2, rest values come in remanining
    console.log(first, second, remaining);      // 1, 2, [3,4,5]
}
arr = [1,2,3,4,5]
printVals(...arr);              // spread the values here
printVals([1,2,3,4,5,6]);           // does not works without spreading
printVals(...[1,3,4,5,45,54]);      // works as we spread
printVals(1,2,4,34,45,43,345);      // works as all values are already spreaded

{
    let [a, ...rem] = arr;
    console.log('\n',a, rem);    

    let arr2 = [...arr];        // is equal to  let arr2 = arr;
    console.log(arr2);
}

{
    let student = {
        fname: 'Raj',
        lname: 'something',
        marks: 90
    };

    let {fname, ...rest_det} = student;
    console.log(fname);
    console.log(rest_det);
}

// examples of rest using objects
console.log('\n--------- rest: using objects ----------')

student = {fname: 'Rohit', lname: 'Sharma', addresss: 'LPU', mobile: 124234123};
let {fname, ...restDet} = student;
console.log(restDet);






// classes
console.log('--------------------------------------- ## Classes --------------------------------------')

class Animal {
    constructor(name) {
        this.name = name;
        console.log('Animal constructed');
    }
    speak() {
        console.log(`This is a ${this.name}`);
    }
}

class Dog extends Animal {      // inherits Animal class
    constructor(name, breed) {          // constructor with param
        super(name);
        this.bread = breed;
    }

    speak() {                               // normal functions / methods
        console.log(`${this.name} barks`);
    }

    // getter function
    get animalName() {
        return this.name.toUpperCase();
    }

    // setter function
    set animalName(newName) {
        this.name = newName;
    }

    static about() {        // can be called without creating object of the class
        console.log("This is a Dog class, inherited Animal.")
    }
}

let anAnimal = new Dog('Tomi', 'Labrador');
anAnimal.speak();
console.log(anAnimal.animalName);           // this is how getter is invoked
anAnimal.animalName = 'Dabbu'               // this is how setter is invoked
// This is because getter and setter methods are designed to be used like properties, 
// and the JavaScript interpreter automatically calls 
// the appropriate method when a property is accessed or modified.
console.log(anAnimal.animalName);

Dog.about();


// Anonymous class
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let myInstance = new MyClass("Alice");
myInstance.greet(); // Output: "Hello, my name is Alice."





// ====>> Generators
function *generator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



function *range(start, end) {
    for(let i = start; i <= end; ++i) {
        yield i;
    }
}

for(let num of range(1,5)) {
    console.log(num);   // 1, 2, 3, 4, 5
}
console.log();


function *fibonacci() {
    let prev = 0, curr = 1;
    while(true) {
        yield curr;
        [prev, curr] = [curr, prev + curr]
    }
}

let fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

