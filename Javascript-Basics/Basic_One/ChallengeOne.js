//calculate are and perimeter of rectangle
const length = 10;
const breath = 20;
const perimeterOfRectangle = 2 + length * breath;
console.log(perimeterOfRectangle); //otuput: 202

//calculate the semi parameter
let a = 5;
let b = 4;
let c = 3;
let s = (a + b + c) / 2;
console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c))); //otuput: 6

//CircumferenceOfCircle of circle . formula 2pir
let r = 12;
let CircumferenceOfCircle = Number(2 * Math.PI * r);
console.log(CircumferenceOfCircle); //otuput:75.39822368615503
CircumferenceOfCircle = Number((2 * Math.PI * r).toFixed(2));
console.log(CircumferenceOfCircle); //output: 75.4
