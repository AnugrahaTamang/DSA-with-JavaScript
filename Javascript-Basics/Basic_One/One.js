// Sum of two integer
let a = 10;
let b = 20;
console.log("sum of 10 and 20:" + a + b); //not addition but concatination
// Output : sum of 10 and 20:1020
console.log("sum of 10 and 20 :", +(a + b));
//output: sum of 10 and 20 : 30 , priority will given first bracket
console.log(a + b + "sum of 10 and 20");
//Output: 30sum of 10 and 20
console.log("1" + 1); //output: 11 concatination
console.log("1" - 1); //output: 0 subtraction
console.log("1" / 1); //output: 1 division
console.log("1" * 1); //output: 1 multiplication

//Swapping: Transfer data into each other
/* method one : 
let x = 10;
let y = 20;
let z;
z = x;
x = y;
y = z;
console.log(x);
console.log(y);
*/

/* Method 2:
let x = 10;
let y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y); */

/*method 3:
let x = 10;
let y = 20 
[x,y] = [y, x]
console.log(x, y);
*/

//Simple Mathemeatics solution
let x = 7;
let y = 2;
console.log(x % y); //remainder one
console.log(y % x); //remainder 2 kinaki yo division samvav xaina

let p = 4567;
console.log(Math.floor(p / 10)); //output: 456
console.log(Math.floor(p / 100)); //output: 45
console.log(Math.floor(p / 1000)); //output: 4 jati 0 tapdai janxa tetinai digit hatdai janxa

//Operator
console.log(10 == "10"); //output: true
console.log(10 === "10"); // output: false it check the type

//post and pre operator
let i = 11;
i = i++ + ++i;
console.log(i); //output: 24

let j = 11,
  k = 22;
let l = j + k + j++ + k++ + ++j + ++k;
console.log(l);

let m = true; //javascript let the true value is 1
m++;
console.log(m); //output: 2

let d = false; //false value 0
d++;
console.log(d); //output: 1

// let e = 10
// let f = ++(e++)
// console.log(f) //output: error

console.log(Math.round(10.3)); //output: 10
console.log(Math.ceil(10.1)); //output : 11
console.log(Math.floor(10.9)); //output: 10
console.log(Math.trunc(18.98)); //output: 18
console.log(Math.pow(2, 3)); //output: 8
console.log(Math.sqrt(4)); // otuput: 2
console.log(Math.sqrt(64)); //output: 8
console.log(Math.abs(-10)); //output: 10
console.log(Math.abs(-12)); //output: 12
console.log(Math.max(1, 2, 3)); //output: 3
console.log(Math.min(12, 13, 11)); //output: 11
console.log(Math.random()); //0 -1

let g = 89.09835;
console.log(g.toFixed(2)); //output: 89.10
console.log(g.toFixed(3)); //output: 89.098
console.log(g.toFixed(4)); //output: 89.0983
let h = g.toFixed(1);
console.log(h); //output: 89.1
console.log(typeof h); // string
