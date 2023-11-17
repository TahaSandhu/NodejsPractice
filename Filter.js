// how to get a single value in array 
const arr = [10,23,5,6,8,9,12,10]
// in thi section we get all value which is in the array
arr.filter((item)=>{
  console.log(item)
})

// and now we get only condition value

let result = arr.filter((item)=>{
//    return  item === 10
return item > 10
})

console.log(result)