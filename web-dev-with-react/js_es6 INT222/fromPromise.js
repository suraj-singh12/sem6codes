// * Informal
// The solution to the callback hell is promises.
// A promise is the 'promise of the code execution'. The code executes or fails, in both the cases the subscriber will be notified.

// * Formally
// Promises in js are a way to handle asynchronous operations. Promises allow you to write code that can handle success or failure of an asynchronous operation, without resorting to complex and hard-to-read nested callbacks.

// Promise either resolves or rejects, these are two callbacks provided by js by default, they are called like this: resolve(value), reject(value)

// Promise object has 2 properties: state and result

console.log("hello1");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(345);
    // reject(8978978078);
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(new Error('error 543 from promise2'))
    }, 1000)
}).then((result) => {
    console.log('This is promise2 result: ', result);
}).catch((err) => {
    console.log('some error occurred in promise2');
});


promise1
  .then((result) => {
    console.log("promise1 result: ", result);
  })
  .catch((err) => {
    console.log('some error occurred in promise1');
  });


let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Ans from promise3');
        reject(new Error('error from promise3'));
    }, 900)
})
promise3.then((res) => {       // took result, error both in same
    console.log(res);
}).catch((error) => {
    console.log('an error occurred: promise3')
}).finally(() => {
    console.log('general cleanup from promise3');
}) 

console.log("hello2");
console.log(promise1, promise2);

// * Note: JS is synchronous single-threaded language, but with the help of event-loops and Promises, JS is used to do asynchronous programming.

// we use promises for parallel execution (or to achieve asynchronous behavior) 
// fetch data from api1
// fetch data from api2
// fetch data from api3
// remaning tasks continue

// data will be fetched from api1, api2, api3 in background parallelly, and the promise will resolve or reject whatever that is.

// but then at some point of time you may want some tasks to happen in synchronous way, 
// for that you do it like this
// fetch data from api1 
    // .then(()=> { // do this task})
    // .then(()=> {// do this task })
    // .catch(() => { // do this })
    // and so on, 
// this .then() part will be executed in a synchronous (serial) fashion, first the api will resolve, then .then() then another one and so on


/*
What is Synchronous in JavaScript?
As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

console.log('First');
console.log('Second');
console.log('Third');

Output -
First
Second
Third
*/

// * When we say synchronous vs asynchronous JavaScript the execution sequence of instructions in a program is what differentiates them.

/*
What is Asynchronous in JavaScript?
As we saw in the synchronous code example, all instructions in the program execute one after another, and every instruction waits for its previous instruction to get executed. Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.

See the following coding example to understand how javascript works asynchronously -

Code Example -
console.log('First');
// Set timeout for 2 seconds
setTimeout(() => console.log('Second'), 2000);
console.log('Third');

Output -
First
Third
Second
*/


