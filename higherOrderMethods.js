// Map method
// let arr = [4, 3, 2, 1, 10]
// let newArr = arr.map((ele, index, arr) => {
//     console.log(ele, index, arr)
//     return ele * ele
// }) // map creates an new array where forEach doesn't
// console.log(newArr)

// Filter method -> creates an new array
// let arr = [4, 3, 2, 1, 10, 25, 12]
// let newArr = arr.filter(ele => ele > 3) // return the element which are greater than 3
// console.log(newArr)

// Reduce method -> return an value not an array
let arr = [4, 3, 2, 1, 1, 1]
let newArr = arr.reduce((acc, ele,) => {
    return acc + ele
}, 4) // reduce takes two arguments, first is a callback function and second is the initial value of accumulator
console.log(newArr) 
