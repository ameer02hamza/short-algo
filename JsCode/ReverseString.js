
console.log("----------------------------------------------------------------------------------------");
console.log("Reverse String");
console.log("----------------------------------------------------------------------------------------");
let resverseString = (s) =>{
    // this function will convert the string into reverse string
    let userString = s.split(' ') // ["hello", "world"]
    //1 will reverse the array convert into string remove the , and joins with space(' ')
    return userString.reverse().toString().split(',').join(' ')
}

let userString ="hello world";

console.log(resverseString(userString))