// Questions 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a = prompt("Enter a number") // prompt doesn't work in vscode
// arr.push(Number.parseInt(a))
// console.log(arr)

// Question 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let a;
// do {
//     a = prompt("Enter a number")
//     arr.push(Number.parseInt(a))
// } while (a !== 0)
// console.log(arr)

// Question 3
// let arr = [10, 2, 70, 8, 90, 10]
// let newArr = arr.filter(ele => ele % 10 === 0)
// console.log(newArr)

// Question 4
// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map(ele => ele * ele)
// console.log(newArr)

// Question 5
let arr = [1, 2, 3, 4, 5]
let newValue = arr.reduce((acc, ele) => acc * ele, 1)
console.log(newValue)