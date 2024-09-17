// Create an example array to work with
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

// ========== at() ==========
console.log("Array at(2):", array1.at(2)); // Returns the element at index 2

// ========== concat() ==========
let combinedArray = array1.concat(array2);
console.log("Concatenated Array:", combinedArray); // Combines two arrays

// ========== constructor ==========
console.log("Array constructor:", array1.constructor); // Returns the constructor of the array

// ========== copyWithin() ==========
array1.copyWithin(0, 3);
console.log("Array after copyWithin(0, 3):", array1); // Copies elements within the array

// ========== entries() ==========
let iterator = array1.entries();
console.log("Array entries:");
for (let entry of iterator) {
    console.log(entry); // Returns an array iterator
}

// ========== every() ==========
let allPositive = array1.every(num => num > 0);
console.log("All elements are positive:", allPositive); // Checks if every element passes a test

// ========== fill() ==========
array1.fill(0, 2, 4);
console.log("Array after fill(0, 2, 4):", array1); // Fills array elements with a value

// ========== filter() ==========
let filteredArray = array1.filter(num => num > 2);
console.log("Filtered Array (num > 2):", filteredArray); // Creates an array with elements passing a test

// ========== find() ==========
let foundElement = array1.find(num => num > 2);
console.log("First element > 2:", foundElement); // Returns the first element that satisfies the test

// ========== findIndex() ==========
let foundIndex = array1.findIndex(num => num > 2);
console.log("Index of first element > 2:", foundIndex); // Returns index of the first element that satisfies the test

// ========== findLast() ==========
let foundLastElement = array1.findLast(num => num > 2);
console.log("Last element > 2:", foundLastElement); // Returns the last element that satisfies the test

// ========== findLastIndex() ==========
let foundLastIndex = array1.findLastIndex(num => num > 2);
console.log("Last index of element > 2:", foundLastIndex); // Returns the last index of the element that satisfies the test

// ========== flat() ==========
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat(2);
console.log("Flattened Array:", flatArray); // Flattens nested arrays

// ========== flatMap() ==========
let flatMappedArray = array1.flatMap(num => [num, num * 2]);
console.log("FlatMapped Array:", flatMappedArray); // Maps and flattens the array

// ========== forEach() ==========
console.log("Using forEach:");
array1.forEach(num => console.log(num)); // Executes a function for each element

// ========== from() ==========
let arrayFromStr = Array.from("Hello");
console.log("Array from string:", arrayFromStr); // Creates an array from iterable

// ========== includes() ==========
console.log("Array includes 3:", array1.includes(3)); // Checks if the array includes a certain element

// ========== indexOf() ==========
console.log("Index of 3 in array:", array1.indexOf(3)); // Returns the index of the first occurrence of an element

// ========== isArray() ==========
console.log("Is array1 an array?", Array.isArray(array1)); // Checks if the object is an array

// ========== join() ==========
console.log("Array joined with '-':", array1.join('-')); // Joins all array elements into a string

// ========== keys() ==========
let keys = array1.keys();
console.log("Array keys:");
for (let key of keys) {
    console.log(key); // Returns an array iterator with keys
}

// ========== lastIndexOf() ==========
console.log("Last index of 0 in array:", array1.lastIndexOf(0)); // Returns the last index of an element

// ========== length ==========
console.log("Array length:", array1.length); // Returns the length of the array

// ========== map() ==========
let mappedArray = array1.map(num => num * 2);
console.log("Mapped Array (num * 2):", mappedArray); // Creates a new array with the results of a function

// ========== of() ==========
let arrayOfElements = Array.of(10, 20, 30);
console.log("Array.of(10, 20, 30):", arrayOfElements); // Creates an array from the arguments

// ========== pop() ==========
let poppedElement = array1.pop();
console.log("Popped element:", poppedElement); // Removes the last element from the array

// ========== prototype ==========
console.log("Array prototype:", Array.prototype); // Accesses the prototype of the array

// ========== push() ==========
array1.push(6);
console.log("Array after push(6):", array1); // Adds an element to the end of the array

// ========== reduce() ==========
let sum = array1.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array elements:", sum); // Reduces array to a single value

// ========== reduceRight() ==========
let sumRight = array1.reduceRight((acc, curr) => acc + curr, 0);
console.log("Sum of array elements (reduceRight):", sumRight); // Reduces array from right to left

// ========== reverse() ==========
let reversedArray = array1.reverse();
console.log("Reversed Array:", reversedArray); // Reverses the array

// ========== shift() ==========
let shiftedElement = array1.shift();
console.log("Shifted element:", shiftedElement); // Removes the first element

// ========== slice() ==========
let slicedArray = array1.slice(1, 3);
console.log("Sliced Array (1, 3):", slicedArray); // Returns a shallow copy of a portion of the array

// ========== some() ==========
let someGreaterThan2 = array1.some(num => num > 2);
console.log("Some elements > 2:", someGreaterThan2); // Checks if at least one element passes the test

// ========== sort() ==========
let sortedArray = array1.sort((a, b) => a - b);
console.log("Sorted Array:", sortedArray); // Sorts the array

// ========== splice() ==========
array1.splice(1, 2, 99, 100);
console.log("Array after splice(1, 2, 99, 100):", array1); // Adds/removes elements from the array

// ========== toReversed() ==========
// let reversedClone = array1.toReversed();
// console.log("Cloned and reversed array:", reversedClone); // Returns a new reversed array (ES2023 feature)

// ========== toSorted() ==========
// let sortedClone = array1.toSorted();
// console.log("Cloned and sorted array:", sortedClone); // Returns a new sorted array (ES2023 feature)

// // ========== toSpliced() ==========
// let splicedClone = array1.toSpliced(1, 2, 50);
// console.log("Cloned and spliced array:", splicedClone); // Returns a new array with spliced elements (ES2023 feature)

// ========== toString() ==========
console.log("Array as string:", array1.toString()); // Converts array to string

// ========== unshift() ==========
array1.unshift(0);
console.log("Array after unshift(0):", array1); // Adds elements to the start of the array

// ========== values() ==========
let values = array1.values();
console.log("Array values:");
for (let value of values) {
    console.log(value); // Returns an array iterator with values
}

// ========== valueOf() ==========
console.log("Array valueOf:", array1.valueOf()); // Returns the array itself

// ========== with() (ES2023 feature) ==========
// let newArray = array1.with(2, 50);
// console.log("Array after with(2, 50):", newArray); // Creates a new array with a modified value at a given index (ES2023 feature)
