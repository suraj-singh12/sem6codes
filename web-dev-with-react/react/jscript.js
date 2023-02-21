// creation of objects using literal
// Object literal
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  isRunning: false,
  start: function () {
    this.isRunning = true;
    console.log("The car has started.");
  },
  stop: function () {
    this.isRunning = false;
    console.log("The car has stopped.");
  },
};

// Accessing object properties and methods
console.log(car.make); // "Toyota"
car.start(); // "The car has started."
console.log(car.isRunning); // true


// * ------------------------------------------------------------------------------

// creation of objects using constructor
// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

// Adding methods to the Car constructor's prototype
Car.prototype.start = function () {
  this.isRunning = true;
  console.log("The car has started.");
};

Car.prototype.stop = function () {
  this.isRunning = false;
  console.log("The car has stopped.");
};

// Creating a new instance of Car
const myCar = new Car("Toyota", "Corolla", 2021);

// Accessing object properties and methods
console.log(myCar.make); // "Toyota"
myCar.start(); // "The car has started."
console.log(myCar.isRunning); // true
console.log('\n');


// * ------------------------------------------------------------------------------

{
    // using constructor of class
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.isRunning = false;
        }
        // Adding methods to the Car constructor's prototype
        start() {
            this.isRunning = true;
            console.log("The car has started.");
        }
        stop() {
            this.isRunning = false;
            console.log("The car has stopped.");
        }
    }



    // Creating a new instance of Car
    const myCar = new Car("Toyota", "Corolla", 2021);

    // Accessing object properties and methods
    console.log(myCar.make); // "Toyota"
    myCar.start(); // "The car has started."
    console.log(myCar.isRunning); // true
    console.log('\n');
}

// * -------------------------------------------------------------------------
// usign `Object` constructor           (1)
var book = new Object();
book.bookname = 'Harry Potter and Prisoner of Azkaban';
book.publisher = 'Bloomsburry';
book.numberOfCopies = 100;
console.log(book);


var book = new Object();
book['bookname'] = 'Harry Potter and Prisoner of Azkaban';
book['publisher'] = 'Bloomsburry';
book['numberOfCopies'] = 100;
console.log(book);


// using user defined constructor function      (2)
function Book(bookname, publisher, numberOfCopies) {
    this.bookname = bookname;
    this.publisher = publisher;
    this.numberOfCopies = numberOfCopies;
}
let fictionBook = new Book('Harry Puttar', 'Bloomsburry', 100);
console.log(fictionBook);

// * ------------------------------------------------------------------------------
{
    // ! ERROR : book is not a constructor (arrow function can't be a constructor)
    // ! this is because arrow functions do not have `this` binding
    // const book = (bookname, publisher, numberOfCopies) => {
    //     this.bookname = bookname;
    //     this.publisher = publisher;
    //     this.numberOfCopies = numberOfCopies;
    // }

    // fictionBook = new book('Harry Puttar', 'Bloomsburry', 100);
    // console.log(fictionBook);

    // * this will work  (returning an object from arrow function)
    console.log('\n---> using arrow functions');
    const book = (bookname, publisher, numberOfCopies) => ({
      // returning object
        bookname,
        publisher, 
        numberOfCopies 
    })

    let fictionBook = book('Shaktiman', 'Bloomsburry', 100);   // check this
    console.log(fictionBook);
    console.log(fictionBook.bookname);
    console.log('\n')

    // const book2 = (bookname, publisher, numberOfCopies) => {
    //  returning the object
    //   return {
    //     bookname,
    //     publisher, 
    //     numberOfCopies 
    //   }
    // }
    
}

// * ------------------------------------------------------------------------------

{
    // using class constructor              (3)
    class Book {
        constructor(bookname, publisher, numberOfCopies) {
            this.bookname = bookname;
            this.publisher = publisher;
            this.numberOfCopies = numberOfCopies;
        }
        print() {
            console.log(this.bookname, this.publisher, this.numberOfCopies);
        }
    }

    let fictionBook = new Book('Harry Puttar', 'Bloomsburry', 100);
    console.log('\n', fictionBook);
    fictionBook.print();
}


// * ------------------------------------------------------------------------------
{
    // using class (without using constructr function)
    class Book {

    }
    let jordan = new Book();
    jordan.name = '12 rules of life';
    console.log(jordan);
}

// * ------------------------------------------------------------------------------