// var age = [34,45,43,22,87,56,44];
// var max = age[0];
// for(var i=0; i<age.length; i++){
//     var element = age[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log(max);


function ageArray(array){
    var max = array[0];
for(var i=0; i<array.length; i++){
    var element = array[i];
    if(element > max){
        max = element;
    }
}
return max;
}
var age = [34,45,43,22,87,56,44];
const result = ageArray(age);
console.log(result);