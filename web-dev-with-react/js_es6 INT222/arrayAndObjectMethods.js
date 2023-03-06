let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let myBest = fruits.slice(-3, -1);
console.log(myBest);

myBest = fruits.slice(-3);
console.log(myBest);

myBest = fruits.slice(2);
console.log(myBest);

myBest = fruits.slice(2, 5);
console.log(myBest);

// * Splice
// * array.splice(index, howmany, item1, ....., itemX)
            // (index, howMany, add1, add2, ...addX);
/*
Parameter	                Description
index	            Required        (The position to add/remove items). Negative value defines the position from the end of the array.
howmany	            Optional.       Number of items to be removed.
item1, ..., itemX	Optional.       New elements(s) to be added.


fruits = ["Banana", "Orange", "Apple", "Mango"];
    (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(1)
    (3) ['Orange', 'Apple', 'Mango']
fruits
    ['Banana']


fruits = ["Banana", "Orange", "Apple", "Mango"];
    (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(1,3)
    (3) ['Orange', 'Apple', 'Mango']
fruits
    ['Banana']


fruits = ["Banana", "Orange", "Apple", "Mango"];
    (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(1,2)
    (2) ['Orange', 'Apple']
fruits
    (2) ['Banana', 'Mango']


fruits = ["Banana", "Orange", "Apple", "Mango"];
    (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(1,2, "Kiwi")
    (2) ['Orange', 'Apple']
fruits
    (3) ['Banana', 'Kiwi', 'Mango']
*/

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

console.log('\nsplice:')
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2, "Kiwi");
console.log(fruits);


