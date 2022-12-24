const randomNumber = Math.random();  // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
    console.log(`FIRSTLY: the random number generated is ${randomNumber} which is greater than .7`);
}

// let theNumbers = [];
// let condition = false;
// while (!condition) {
//     const randomNumber = Math.random();
//     theNumbers.push(randomNumber);
//     if (randomNumber > 0.7) {
//         console.log(`the random number generated is ${randomNumber} which is greater than .7`);
//         condition = true;
//     }
// }
// console.log(theNumbers);

/*
let myArray = [12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('\n');

for (const element of myArray) {
    console.log(element);
}

for (let i = myArray.length; i >= 0; i--) {
    console.log(myArray[i]);
}

*/

let newNumbers = [];
let term = false;
while (!term) {
    const randomNumber = Math.random();
    const anotherRandom = Math.random();
    newNumbers.push(randomNumber);
    newNumbers.push(anotherRandom);
    if ((randomNumber > 0.7 && anotherRandom > 0.7) || (randomNumber <= 0.2 || anotherRandom <= 0.2)) {
        console.log(`the random number generated is ${randomNumber} & ${anotherRandom}`);
        term = true;
    }
}
console.log(newNumbers);