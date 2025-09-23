function sumAll(arr) {
  const num1 = arr[0];
  const num2 = arr[1];

  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}


console.log(sumAll([4, 1])); 
console.log(sumAll([1, 4])); 
console.log(sumAll([5, 10])); 
