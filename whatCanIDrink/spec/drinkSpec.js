describe("Test Suite of my whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Age check", function() {
        // Specs are defined by calling the global Jasmine function it
        it("Value should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Toddy drink for the young boy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Toddy drink for the young boy");
        });
        
        it("should return drink coke when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Coke drink for the young man");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Beer drink for the man");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(30)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Whisky drink for the cultivated gentleman");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("drink");
            expect(result).not.toEqual(-1);
        });
    });
});

