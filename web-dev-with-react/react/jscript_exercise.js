// Challenge1: Create an array 'myFavSuperheroes' and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names)

let myFavSuperheroes = [];
for(let i = 1; i <= 5; i++) {
    myFavSuperheroes.push('Hero' + i);
}

// Challenge2: Print (in console) the first superheroes name in your array 
console.log(myFavSuperheroes[0]);

// Challenge3: Print (in console) the length of the array
console.log(myFavSuperheroes.length);

// Challenge4: Change the second last element in the Array to your name and print the second last element in the array
myFavSuperheroes[myFavSuperheroes.length - 2] = 'Suraj';
console.log(myFavSuperheroes[myFavSuperheroes.length - 2]);

// Challenge5: Add your friend's name (friend1) to the array at the start without using splice method
myFavSuperheroes.unshift('Sayan');  // friend1

// Challenge6: Add your friend's name (friend1) to the array at the start without using splice method
myFavSuperheroes.unshift('Pawan');      // friend2
console.log('6:', myFavSuperheroes);

// Challenge7: Remove your friend's name (friend1) in the array without using the splice method
// let [name1, name2, ...rem] = myFavSuperheroes;
// rem.unshift(name1);
// myFavSuperheroes = rem;

myFavSuperheroes =  myFavSuperheroes.filter((name) => {
    return name !== 'Sayan'
});
console.log('7:', myFavSuperheroes);


// Challenge8: Remove your friend's name (friend2) in the array without using the splice method
// [name1, ...myFavSuperheroes] = myFavSuperheroes;
myFavSuperheroes.shift();           // returns the element that's deleted (always the first element)
console.log('8: ', myFavSuperheroes);


// Challenge9: Add your friend's name (friend1) to the array at the 4rd position without removing any element using the splice method
let ind = 2;
// myFavSuperheroes.splice(ind, 0, 'Sayan');   // indexToAdd, cnt of elements to be removed, elementToAdd
let partial1 = [], partial2 = [];
let len = myFavSuperheroes.length;
for(let i = 0; i < len; ++i)  {
    if(i == ind) {
        partial1.push('Sayan');
    }
    partial1.push(myFavSuperheroes[i]);
}
myFavSuperheroes = partial1;
console.log('9:', myFavSuperheroes);


// Challenge10: Remove the 4th, 5th element in the array and add your friend's name (friend2) at the 4th position using the splice method
let fromIndx = 3;
let noOfElems = 2;
myFavSuperheroes.splice(fromIndx, noOfElems); 
myFavSuperheroes.splice(3, 0, 'Pawan');     // friend 2 at 4th position
console.log('10:', myFavSuperheroes);

// Challenge11: Create a nested array superheroUniverse, and add 2 arrays to it, where first should contain the name of the Marvel superheroes and second array should contain the name of the DC superheroes
let superheroUniverse = [['SpiderMan', 'IronMan'],['SuperMan', 'Flash']]
console.log('11:',superheroUniverse);

// Challenge12: Print one of the Marvel superhero name from the array superheroUniverse
console.log(superheroUniverse[0][0]);

// Challenge13: Print one of the DC superhero name from the array superheroUniverse
console.log(superheroUniverse[1][0]);