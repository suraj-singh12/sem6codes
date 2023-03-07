/**
 * Arithmetic
 * Logical
 * 
 */

console.log(234 == true);           // false 
console.log(2 == true);             // false
console.log(1 == true);     // true
console.log(1 === true);            // false

console.log('1' == true);       // true
console.log('2' == true);               // false



let student = {name: 'stud', rollNo: 435};
delete student.rollNo;
console.log(student);