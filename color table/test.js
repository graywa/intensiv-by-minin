

//
// function sum(a) {
//   let currentSum = a
//
//   function f(b) {
//     if (b === undefined) {return currentSum}
//     return currentSum += b
//   }
//
//   return f
// }

const sum = (a) => {
  let curSum = a

  function f(b) {
    curSum += b
    return f
  }

  f.toString = function () {
    return curSum
  }

  return f
}

// console.log(sum(5) (4))
// console.log(sum(5,4))
// console.log(sum(0) (4))
console.log(sum(5)(3)(7)(8))


