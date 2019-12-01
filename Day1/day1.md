---
title: Advent of Code 2019 Day 1
published: false
description: Day one of Advent of Code 2019 Challenge
tags: 
---

# The Challenge
Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. 
Each day two puzzles will be provided.

# Why this year?
The last 2-3 month I have been improving my Functional programming skills. First I readed about FP on Javascript and now I am focusing on Haskell. I though this would be a good oportunity to use what I am learning.

# First puzzle of the day
`Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.`

Apart from this description some examples are given:
1. `For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2`
2. `For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.`
3. `For a mass of 1969, the fuel required is 654.`
4. `For a mass of 100756, the fuel required is 33583.`

`the Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.`

# Implementation process an solution
As I am really new to Haskell I decided to also implement the puzzle in Javascript.
As some examples were given, I decide to transform them intro a test cases.

```javascript
const { calculateFuelRequired } = require('./FuelRequerimentCalculator')
describe('calculateFuelRequired', () => {
  it('returns 0 when the mass is 0', () => {
    const fuelRequired = calculateFuelRequired(0);

    expect(fuelRequired).toBe(0);
  });

  it('returns 0 when the mass is less than 0', () => {
    const fuelRequired = calculateFuelRequired(-1);

    expect(fuelRequired).toBe(0);
  });

  it('returns 2 when the mass is 12', () => {
    const fuelRequired = calculateFuelRequired(12);

    expect(fuelRequired).toBe(2);
  });

  it('returns 2 when the mass is 14', () => {
    const fuelRequired = calculateFuelRequired(14);

    expect(fuelRequired).toBe(2);
  });

  it('returns 654 when the mass is 1969', () => {
    const fuelRequired = calculateFuelRequired(1969);

    expect(fuelRequired).toBe(654);
  });

  it('returns 33583 when the mass is 100756', () => {
    const fuelRequired = calculateFuelRequired(100756);

    expect(fuelRequired).toBe(33583);
  });
})
```
The resulting code is simple:
```javascript
function calculateFuelRequired(mass) {
  if (mass <= 0) return 0;
  return Math.floor((mass / 3)) - 2;
}
```
To execute the code against the inputs given by the challenge and calculating the answer:

```javascript
function main() {
  const values = getValues(); //function that returns an array with all the values given.
  const total = values.reduce((prev, curr) => {
    return prev + calculateFuelRequired(curr);
  }, 0);
  console.log(total);
}
``` 

Ones solved the challenge in Javascript I tried my best to translate it to something that the Haskell compiler wouldn't claim about:

```haskell
module FuelRequerimentCalculator where
calculateFuelRequired :: Double -> Integer
calculateFuelRequired mass | mass <= 0 = 0
                           | otherwise = floor(mass/3) - 2

main :: Integer
main = sum (map calculateFuelRequired getValues)
```

#Second puzzle of the day

`Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.`

1. `A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.`
2. `At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.`
3. `The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.`
  
`What is the sum of the fuel requirements?`

# Implementation process an solution
The same examples with the updated result are given, so I create again some tests.

```javascript
describe('calculateFuelRequiredCountingWithFuel', () => {
  it('returns 0 when the mass is 0', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(0);

    expect(fuelRequired).toBe(0);
  });

  it('returns 0 when the mass is less than 0', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(-1);

    expect(fuelRequired).toBe(0);
  });

  it('returns 2 when the mass is 12', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(12);

    expect(fuelRequired).toBe(2);
  });

  it('returns 2 when the mass is 14', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(14);

    expect(fuelRequired).toBe(2);
  });

  it('returns 966 when the mass is 1969', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(1969);

    expect(fuelRequired).toBe(966);
  });

  it('returns 50346 when the mass is 100756', () => {
    const fuelRequired = calculateFuelRequiredCountingWithFuel(100756);

    expect(fuelRequired).toBe(50346);
  });
})
```

The solution is a bit more complicated and it includes recursion.

```javascript 
function calculateFuelRequiredCountingWithFuel(mass) {
  const calc = Math.floor((mass / 3)) - 2;
  if (calc <= 0) return 0;
  const result = calc + calculateFuelRequiredCountingWithFuel(calc);
  return result;
}
```
And this is the updated main method to show both the solutions.
```javascript
function main() {
  const values = getValues();
  const noFueltotal = values.reduce((prev, curr) => {
    return prev + calculateFuelRequired(curr);
  }, 0);
  const withFuelTotal = values.reduce((prev, curr) => {
    return prev + calculateFuelRequiredCountingWithFuel(curr);
  }, 0);
  console.log('The total without adding the fuel is ' + noFueltotal);
  console.log('The total adding the fuel is ' + withFuelTotal);
}
```

And finally the Haskell version:

```haskell
calculateFuelRequiredCountingWithFuel:: Double -> Integer
calculateFuelRequiredCountingWithFuel mass | calculateFuelRequired mass <= 0 = 0
                                           | otherwise =  (calculateFuelRequired mass) + (calculateFuelRequiredCountingWithFuel ( fromIntegral (calculateFuelRequired mass)))

main2 :: Integer
main2 = sum (map calculateFuelRequiredCountingWithFuel getValues)
```

#Conclusion
This was the first day, I will continue updating the repository and trying to create one post peer day.
{% github IObregon/adventofcode2019 no-readme%}

If you want to participate this is the web page of the challenge [Advent of code](https://adventofcode.com/2019/day/1)