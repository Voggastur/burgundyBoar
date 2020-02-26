function whatCanIDrink(age){

console.log(age);


    if (age <= 0) {
        return("A prayer of hope since your age is less than 0");
    }
    if (age <= 4) {
        return("Milk for the toddler");
    }
    if (age <= 14) {
        return("Toddy for the young boy");
    }
    if (age <= 18) {
        return("Coke for the young man");
    }
    if (age <= 21) {
        return("Beer for the man");
    }
    if (age <= 100) {
        return("Whisky for the gentleman");
    }
    if (age > 100) {
        return("For the wise old man we offer the finest Glenfiddich Reserve 1955");
    }
    else {
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}

whatCanIDrink(15);
