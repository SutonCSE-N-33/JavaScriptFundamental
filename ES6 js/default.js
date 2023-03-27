// function add(num1,num2){
  
//     num2 = num2 || 3;
//     const result = num1+num2;
//     return result;
// }
// const sum = add(5);
// console.log(sum);

function add(num1,num2=30){
      const sum = num1+num2;
      return sum;
}
const result = add(5);
console.log(result);
