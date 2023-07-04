/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    // let start = new Date().getTime();  
    let start = Date.now();   
    console.log(start);
    let sum = 0;
    for(let i  = 1; i < n; i++){
        sum += i;
    }
    // let end = (Date.now() - start) / 1000;
    let end = (new Date().getTime() - start) / 1000;
    console.log(sum);
    console.log(end);
    return end;
}

console.log(calculateTime(1000000000));