/**
 * create an array {carBrands}
 * and assign to it ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"]
 */

/**
 * Exercise 1
 *
 * remove the last element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */

/**
 * Exercise 2
 *
 * remove the first element from the {carBrands} array
 *
 * * PS: console.log() the result to see the difference
 */

/**
 * Exercise 3
 *
 * from {carBrands} remove BMW
 *
 * * PS: console.log() the result to see the difference
 */

/**
 * Exercise 4
 *
 * in {carBrands} replace Citroen with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

const carBrands = ["Mercedes", "Volvo", "BMW", "Citroen", "Reno", "Vauxhall"];

const lastBrand = carBrands.pop();

const firstBrand = carBrands.shift();

const removeBMW = carBrands.splice(1,1);

const removeCitroen = carBrands.splice(1,1, "Rolls-Royce");