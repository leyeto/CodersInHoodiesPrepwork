/**
 * create an array "animals" with "cat"
 */

/**
 * Exercise 1
 *
 * add a "dog" to the end of your 'animals'
 *
 * NOTE: console.log() the result to see the difference
 */


/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your 'animals'
 *
 * PS: console.log() the result to see the difference
 */


/**
 * Exercise 3
 *
 * add a "puma" to position 2 in "animals"
 *
 * PS: console.log() the result to see the difference
 */



/**
 * create an array "wildAnimals" with "lion"
 */

/**
 * create an array "moreWildAnimals" with "giraffe" and "elephant"
 */

/**
 * Exercise 4
 *
 * combine wildAnimals and moreWildAnimals into one array
 * and save it into variable combinedWildAnimals
 *
 * PS: console.log() the result to see the difference
 */

let animals =["cat"];

animals.push("dog");
console.log(animals);

animals.unshift("rabbit");
console.log(animals);

animals.splice(1, 0, "puma");
console.log(animals);

let wildAnimals = ["lion"];

let moreWildAnimals = ["giraffe" , "elephant"];

const combinedWildAnimals =wildAnimals.concat(moreWildAnimals);
describe("animals", () => {
	test("animals should be declared", () => {
		expect(Array.isArray(animals)).toBe(true);
	});
});

// Exercise 1
describe("'dog' is the last element in animals", () => {
	test("'dog' should be the last in animals", () => {
		expect(animals[animals.length - 1]).toEqual("dog");
	});
});

// Exercise 2
describe("'rabbit' is the first element in animals", () => {
	test("'rabbit' should be the first in animals", () => {
		expect(animals[0]).toEqual("rabbit");
	});
});

// Exercise 3
describe("'puma' has index 1 in animals", () => {
	test("'puma' should be second in animals", () => {
		expect(animals[1]).toEqual("puma");
	});
});

describe("wildAnimals", () => {
	test("wildAnimals should be declared", () => {
		expect(Array.isArray(wildAnimals)).toBe(true);
	});
});

// Exercise 4
describe("combinedWildAnimals", () => {
	test("combinedWildAnimals contains all animals from wildAnimals and moreWildAnimals", () => {
    expect(combinedWildAnimals).toEqual(["lion", "giraffe",  "elephant"]);
  });
});
