const {calculate} = require('./IntCodeReader')
describe('calculate', () => {
  it('input [1,0,0,0,99] becames [2,0,0,0,99]', () => {
    const input = [1,0,0,0,99];
    const result = calculate(input);
    
    expect(result).toEqual([2,0,0,0,99]);
  });
  it('input [2,3,0,3,99] becames [2,3,0,6,99]', () => {
    const input = [2,3,0,3,99];
    const result = calculate(input);
    
    expect(result).toEqual([2,3,0,6,99]);
  });

  it('input [2,4,4,5,99,0] becames [2,4,4,5,99,9801]', () => {
    const input = [2,4,4,5,99,0];
    const result = calculate(input);
    
    expect(result).toEqual([2,4,4,5,99,9801]);
  });

  it('input [1,1,1,4,99,5,6,0,99] becames [30,1,1,4,2,5,6,0,99]', () => {
    const input = [1,1,1,4,99,5,6,0,99];
    const result = calculate(input);
    
    expect(result).toEqual([30,1,1,4,2,5,6,0,99]);
  });

});