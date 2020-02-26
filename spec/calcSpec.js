describe("bartender", function() {
    describe("whatCanIDrink tests", function() {
        it("should return message", function() {
            expect(whatCanIDrink(13)).toBe(42);
        });
        it("should return message", function() {
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });
});