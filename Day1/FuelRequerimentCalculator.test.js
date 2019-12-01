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