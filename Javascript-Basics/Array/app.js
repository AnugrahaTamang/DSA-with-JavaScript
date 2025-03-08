//sum of arrya
const arr = new Array(5); //length define
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter your Number"));
  sum = sum + arr[i];
}
console.log(arr);
console.log(sum);
