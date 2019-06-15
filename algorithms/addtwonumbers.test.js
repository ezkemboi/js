const assert = require('assert')
const addTwoNumbers = require('./addtwonumbers');

describe("Add two numbers", function () {
    it('should add two numbers correctly', function () {
        // 20 + 20 = 40
        assert.equal(addTwoNumbers(20, 20), 40);
    });
    it('3 + 5 is not equal to 6', function () {
        assert.notEqual(addTwoNumbers(3, 5), 6);
    });
}); 
