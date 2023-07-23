const { createWriteStream, write } = require('fs');

function isPrime(n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;
    for(let i = 5; i * i <= n; i += 6) {
        if(n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

function findPrimeNumbers(start, end) {
    const primes = [];
    for(let i = start; i <= end; ++i) {
        if(isPrime(i)) primes.push(i);
    }
    return primes;
}
const writeable = createWriteStream('sample.txt', {flags: 'a'});
writeable.write(findPrimeNumbers(1,100).toString());
writeable.end();
writeable.on('finish', () => {
    console.log('Write Operation finished');
});
