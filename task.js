// 1
const numbers = [1, 2, 3, 4, 5]
// a
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// b
let multi = 1;
for (let i = 0; i < numbers.length; i++) {
    multi *= numbers[i];
}
// c
let avg = 0;
    avg = sum / numbers.length

console.log(avg);
