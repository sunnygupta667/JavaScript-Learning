// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

//The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.
// myArr.push(6) 
// myArr.push(7)


// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.
// myArr.pop()


//The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
console.log(myArr.unshift(9))


console.log(myArr.shift())

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
