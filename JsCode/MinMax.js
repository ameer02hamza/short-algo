// Max number from array by adding m
console.log("----------------------------------------------------------------------------------------");
console.log("Minimum and Maximum value");
console.log("----------------------------------------------------------------------------------------");
const findMaxMin = (arr,num) =>{
    let convertedArray = []
    let result;
    arr.map( data =>{
        data *= num
        convertedArray.push(data)
    })
    result = "Max value is "+ Math.max(...convertedArray) + " Minimum Value is "+Math.min(...convertedArray)
    return result
}
let arr = [9,5,11,5,10,3]
let m =1
console.log(findMaxMin(arr,m))


