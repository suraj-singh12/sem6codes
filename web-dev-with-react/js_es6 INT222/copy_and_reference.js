
{
    let a = [1,2,3]
    let b = a;          // b is a reference for a
    console.log(a, '\t', b);
    
    a.push(534);
    console.log(a, '\t', b, '\n');
}

{
    let a = [1,2,3];
    let b = [a];        // b is a reference for [a]
    console.log(a, '\t', b);

    a.push(52);
    console.log(a, '\t', b, '\n');
}

{
    let a= [1,2,3];
    let b = [...a];     // b is a deep copy of a
    console.log(a, '\t', b);

    a.push(314);
    console.log(a, '\t', b, '\n');
}