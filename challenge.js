 function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
    let middle = (min_interval + max_interval)/2;
    let square = middle * middle
    if(square === number) {
      return middle;
    } 
     if(square < number) {
       return sqrt_recursive(number, middle, max_interval)
    } else {
     return sqrt_recursive(number, min_interval, middle)
    }
    
}

module.exports = sqrt;


 console.log(sqrt(25))
console.log(sqrt(7056))
