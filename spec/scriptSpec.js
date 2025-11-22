const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest rate Calculator Tests", () => {
    it('Calculate Simple Interest Test', () => {
    var actual = calculateSimpleInterest(1000, 5, 1);
    expect(actual).toBe(50);
});

it('Calculate Total Payable Amount Test', () => {
    var actual = calculateTotalPayableAmount(1000, 50);
    expect(actual).toBe(1050);
})
})



