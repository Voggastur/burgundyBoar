function whatCanIDrink(age){

console.log(age);
console.log(typeof(age));

    if (age <= 0) {
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    }
    if (age <= 14) {
        return("Toddy drink for the young boy");
    }
    if (age <= 18) {
        return("Coke drink for the young man");
    }
    if (age <= 21) {
        return("Beer drink for the man");
    }
    if (age <= 130) {
        return("Whisky drink for the cultivated gentleman");
    }    
    else {
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}

whatCanIDrink(77);
