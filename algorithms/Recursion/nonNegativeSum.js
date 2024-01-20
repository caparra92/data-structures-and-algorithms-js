const nonNegativeSum = (n) => {
    if(n === 0) return n
    return n += nonNegativeSum(n-1);
}

const nonNegativeSumLoop = (n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.time('Recursive approach');

console.log(nonNegativeSum(1234));

console.timeEnd('Recursive approach');

console.log('=================');

console.time('Non Recursive approach');

console.log(nonNegativeSumLoop(1234));

console.timeEnd('Non Recursive approach');