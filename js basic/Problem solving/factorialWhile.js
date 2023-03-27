// let factorial = 1;
// let i = 1;
// while(i <= 5){
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);

    
function calFactorial(num){
    let factorial = 1;
    let i = 1;
    while(i <= 5){
      factorial = factorial * i;
      i++;
}
return factorial;
}

const result = calFactorial(5);
console.log(result);