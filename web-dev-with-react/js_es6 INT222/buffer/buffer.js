// const buf = Buffer.alloc(5, 'Hello world');
// // but will print hello only, because it has a space of 5 bytes
// console.log(buf.toString());

// const buff = Buffer.alloc(5);
// buff.fill('h');
// console.log(buff.toString());

// concat buffers
let buff1 = Buffer.from('Hello');
let buff2 = Buffer.from('World');
let buff3 = Buffer.concat([buff1, buff2], 4);
console.log('contents of buffer are: ',buff3.toString());
