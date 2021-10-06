let s = 'ZWWWYWWW'
str = {}
console.log(s.length/4);
console.log(s.split(''))
s.split('').map((data, index) =>{
    str[data] = (str[data] || 0)+1
})
const unique = (value, index, self) => {
    return self.indexOf(value) === index
  } 
let subString = s.split('').filter(unique)
console.log(subString.toString().split(',').join(''));
console.log(str);