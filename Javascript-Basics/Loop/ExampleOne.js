const n = Number(prompt("Enter your number: "));
if (isNaN(n)) {
  console.log("Invalid Input");
} else {
  if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + 1;
    }
    console.log(sum);
  } else {
    console.log("should be +ve and more than 0");
  }
}

//Prime or not
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if ((n %= 2 == 0)) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 2) return false;
  }
  return true;
}
