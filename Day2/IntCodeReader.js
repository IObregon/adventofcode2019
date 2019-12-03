function calculate(input) {
  const result = input;
  let innitialValue = 0;
  let finallValue = 4;
  let aaa = input.slice(innitialValue, finallValue);
  while (aaa[0] !== 99) {
    if (aaa[0] === 1) {
      result[aaa[3]] = input[aaa[1]] + input[aaa[2]]
    } else if (aaa[0] === 2) {
      result[aaa[3]] = input[aaa[1]] * input[aaa[2]]
    }
    innitialValue += 4;
    finallValue += 4;
    aaa = result.slice(innitialValue, finallValue);
  }
  return result;
}

module.exports = {
  calculate: calculate
}

console.log(calculate([1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 10, 1, 19, 1, 19, 5, 23, 1, 23, 9, 27, 2, 27, 6, 31, 1, 31, 6, 35, 2, 35, 9, 39, 1, 6, 39, 43, 2, 10, 43, 47, 1, 47, 9, 51, 1, 51, 6, 55, 1, 55, 6, 59, 2, 59, 10, 63, 1, 6, 63, 67, 2, 6, 67, 71, 1, 71, 5, 75, 2, 13, 75, 79, 1, 10, 79, 83, 1, 5, 83, 87, 2, 87, 10, 91, 1, 5, 91, 95, 2, 95, 6, 99, 1, 99, 6, 103, 2, 103, 6, 107, 2, 107, 9, 111, 1, 111, 5, 115, 1, 115, 6, 119, 2, 6, 119, 123, 1, 5, 123, 127, 1, 127, 13, 131, 1, 2, 131, 135, 1, 135, 10, 0, 99, 2, 14, 0, 0])[0]);

function execice2() {
  const initialInput = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 10, 1, 19, 1, 19, 5, 23, 1, 23, 9, 27, 2, 27, 6, 31, 1, 31, 6, 35, 2, 35, 9, 39, 1, 6, 39, 43, 2, 10, 43, 47, 1, 47, 9, 51, 1, 51, 6, 55, 1, 55, 6, 59, 2, 59, 10, 63, 1, 6, 63, 67, 2, 6, 67, 71, 1, 71, 5, 75, 2, 13, 75, 79, 1, 10, 79, 83, 1, 5, 83, 87, 2, 87, 10, 91, 1, 5, 91, 95, 2, 95, 6, 99, 1, 99, 6, 103, 2, 103, 6, 107, 2, 107, 9, 111, 1, 111, 5, 115, 1, 115, 6, 119, 2, 6, 119, 123, 1, 5, 123, 127, 1, 127, 13, 131, 1, 2, 131, 135, 1, 135, 10, 0, 99, 2, 14, 0, 0];
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      let thisInput = [...initialInput];
      thisInput[1] = noun;
      thisInput[2] = verb;
      if (calculate(thisInput)[0] === 19690720) {
        console.log(100 * noun + verb);
      }
    }

  }
}

execice2();