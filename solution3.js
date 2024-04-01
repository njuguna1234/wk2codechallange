function getNextPrime(currentPrime) {
    let next = currentPrime + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}


let currentPrime = 1; 
for (let i = 0; i < 5;++i){ 
    currentPrime = getNextPrime(currentPrime);
    console.log(currentPrime);
}
