describe("Test Suite of my fizzBuzz function", function() {

    afterEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("fizzBuzz should return either fizz, buzz, fizzBuzz or number", function() {
        
        it("Value should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });        
        it("should return fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("fizz");
        });                
        it("should return buzz when called as fizzBuzz(20)", function() {
            var result = fizzBuzz(20);
            expect(result).toBe("buzz");
        });
        it("should return fizzBuzz when called as fizzBuzz(75)", function() {
            var result = fizzBuzz(75);
            expect(result).toBe("fizzBuzz");
        });
        it("should return 16 when called as fizzBuzz(16)", function() {
            var result = fizzBuzz(16);
            expect(result).toBe(16);
        });
    });
});