let obj = {
    harry: 90,
    shubh: 45,
    micky: 36,
    hemantwasthere: 99,
    zack: 10,
    shivam: 39
}
// for in loop
for(let a in obj){
    console.log("Marks of " + a + "is" + obj[a]);
}


let arr = [10,20,30,40,50,60,70,80,90,100]; // and we cant iterate object using for of loop
for(let b of arr){ // for of loop is used to iterate array or string
    console.log(b);
}
for(let a in arr){ // for in loop
    console.log(arr[a]);
}