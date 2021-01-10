/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

function greet(name){
    let hello="Hello "+name+"!";
    return "Hello "+name+"!";
}

function loginValidation(age){
    if(age >=18){
        return "Welcome!";
    }else{
        return "Sorry, not allowed."
    }
}

function minNumber(a,b){
    if(a > b){
        return b;
    }else{
        return a;
    }
}

function randomNumber(){
    const random=Math.floor(Math.random() * 10) +1;
    return random;
}

function getOppositeNumber(a){
    return -a;
}