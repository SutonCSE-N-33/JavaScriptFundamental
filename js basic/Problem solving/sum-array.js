// var numbers = [2,4,6,7,8,10,34,55,66,77,88,14];
// var sum = 0;
// for(var i=0; i<numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function addNumbers(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [2,4,6,7,8,10,34,55,66,77,88,14]; 
var result = addNumbers(numbers);
console.log(result);