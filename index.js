function getFactorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * getFactorial(number - 1);
}

const result = getFactorial(5);
console.log(result); //120

/////////////////////////STACK//////////////////

// getFactorial(0) ===> 1

// return 1 * getFactorial(number - 1 (0)); ===> (1 * 1)
// return 2 * getFactorial(number - 1 (1)); ===> 2 * (1 * 1)
// return 3 * getFactorial(number - 1 (2)); ===> 3 * 2 * 1
// return 4 * getFactorial(number - 1 (3)); ===> 4 * 3 * 2 * 1
// return 5 * getFactorial(number - 1 (4)); ===> 5 * 4 * 3 * 2 * 1

// factorial 5 = 5 * 4 * 3 * 2 * 1

function fibonacci(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i += 1) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];

    result.push(prevNum1 + prevNum2);
  }

  return result[num];
}
const resultFn = fibonacci(7);
console.log(resultFn);

function fibonacci(num) {
  let a = 1;
  b = 1;

  for (let i = 3; i <= num; i += 1) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fibonacci(7));
