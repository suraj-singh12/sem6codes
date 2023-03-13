const buf1 = Buffer.alloc(26).fill('aquickbrownfoxjumpsoverthelazydog');
const buf2 = Buffer.alloc(26).fill('?');

buf1.copy(buf2, 8, 16, 20);
console.log(buf2.toString('ascii', 0, 25));
console.log(buf2.toString('utf8', 0, 25));