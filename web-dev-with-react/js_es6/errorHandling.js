let a = 543;
console.log(a);

try {
    console.log(b);
} catch (err) {
    console.log('Error bro error !');
} finally {
    console.log('Ant bhala to sab bhala');
}

console.log('--------------------')

// throwing error
try {
    throw {"msg": "Hello from ERROR"}
} catch(err) {
    console.log("Your error > " + err.msg + " < has been handled.")
}

console.log('--------------------')

try {
    try {
        console.log(dfjhgs);
    } catch(err) {
        throw "error found!"
    }
} catch(err) {
    console.log(err, 'has been resolved')
} finally {
    console.log('Ant bhala to sab bhala')
}

console.log('--------------------')

try {
    try {
        console.log(skljdflk);
    } catch(e) {
        throw new ReferenceError('error');
    }
} catch(e) {
    console.log(e);
}

console.log('--------------------')


