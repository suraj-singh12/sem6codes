
// Symbol is a primitive data type, it is used to create unique identifiers.
// It can be used as a unique key in an object

let mySymbol = Symbol();        // see no 'new' keyword is used, it is just a primitive data type which creates unique identifiers which can be used as keys in an object or database.
let mySymbol2 = Symbol('My symbol');    // with description
let mySymbol3 = Symbol('My symbol');    // with description

console.log(mySymbol2 == mySymbol3);        // false! as symbol() is unique always!

// Sybmol are not enumerable
for(let key in mySymbol) {
    console.log(key);       // nothing will be printed
}

console.log('--------------------')

let id = Symbol('hello');
let id2 = Symbol('hello')
console.log(id == id2);         // false

let id3 = Symbol(123);
const user = {
    name: 'user1',
    [id3]: 12
}
console.log(user);
console.log(user[id3]);

console.log(user['id3']);       // undefined
console.log(user.id3);      // undefined
console.log(id3.description);