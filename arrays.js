let num = [1, 22, 134, 14, 43, 34]
let b = num.toString() // b is now string
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)

// let poppedElement = num.pop() // changes the real array
// console.log(poppedElement)
// console.log(num)

// let pushedEle = num.push(45) // changes the real array
// console.log(pushedEle) // push return the length of an array
// console.log(num)

// let shifted = num.shift() // removes an element from the start of an array
// console.log(shifted)
// console.log(num)

// let unshifted = num.unshift(34) // adds an element to the start of an array
// console.log(num)

// delete num[0] // delete is an operator like typeof, it deletes the element from the array and doesnt affect its length
// console.log(num)

// num.sort() // modifies the original array
// console.log(num)

// const compare = (a, b) => b - a // sort in descending order
// num.sort(compare)
// console.log(num)

// num.reverse() // reverse the array
// console.log(num)

// SPLICE - first arg of splice is where to start, second arg is how many elements to remove, and then other arg is what to add
num.splice(1, 2, "Dread", "DED", "LUFFY") // splice is used to remove and add elements in an array
console.log(num)