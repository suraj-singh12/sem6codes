{
    const student = {
        name: "Ray", 
        marks: 98,
        cgpa: 9.8
    }

    // way1
    let keys = Object.keys(student);
    for(let i = 0; i < keys.length; i++) {
        console.log(keys[i], student[keys[i]]);
    }

    // another way
    keys = Object.values(student);
    let values = Object.values(student);
    for(let i = 0; i < keys.length; ++i) {
        console.log(keys[i], values[i]);
    }

    // ! error ('for of' is used for arrays and other iterable objects)
    // for(let i of student) 
    //     console.log(i);

    // * `for in` is used to iterate over properties of an object
    for(let key in student) {
        console.log(key, student[key]);
    }


    
    let arr = [43,2,23,3];
    // ? Warning: `for in` is used for objects, for arrays use `for of`
    for(let i in arr) console.log(i);

    for(let elem of arr) console.log(elem);
}