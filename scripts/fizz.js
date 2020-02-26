function fizzBuzz(number){

console.log(number);
console.log(typeof(number));

    if (number % 3 === 0 && number % 5 === 0) {
        return("fizzBuzz");
    }
    if (number % 3 === 0) {
        return("fizz");
    }
    if (number % 5 === 0) {
        return("buzz");
    }
    else {
        return (number)
    }
};