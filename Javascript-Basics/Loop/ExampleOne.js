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
