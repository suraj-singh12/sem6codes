// In JavaScript, iterators are objects that provide a way to iterate over a sequence of values, such as the elements in an array, the characters in a string. 
// An iterator object has a next() method that returns an object with two properties 
// value: the next value in sequence
// done : boolean variables that tells whether the sequence is finished
        // true : when iterator reaches the end of the sequence.


let array = [1,2,3,4,5,6];
let iterator = array[Symbol.iterator]();

let result = iterator.next();
while(!result.done) {
    console.log(result.value);
    result = iterator.next();
}


let mystring = "abcdefghijk";
iterator = mystring[Symbol.iterator]();

result = iterator.next();
while(!result.done) {
    console.log(result.value);
    result = iterator.next();
}


arr = [1,2,3,4,5,6];
iterator = arr[Symbol.iterator]();

result = iterator.next();
while(!result.done) {
    console.log(result.value);
    result = iterator.next();
}
