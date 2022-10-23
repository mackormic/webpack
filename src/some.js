function sum(...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];
  }
  return sum;
}

function avg(...numbers) {
  return sum(...numbers) / numbers.length;
}

export default avg;
