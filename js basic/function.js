function printName(){
    console.log("Hey I am Nazrul islam Suton");
}
printName();
printName();
printName();

// function doubleIt(num){
//     var double = num * 2;
//     console.log(double);
// }
// doubleIt(5);
// doubleIt(50);

function doubleIt(num){
    var double = num * 2;
    return double;
}
var double1 = doubleIt(5);
var double2 = doubleIt(50);
var result = double1 + double2;
console.log(result);


function add(num1,num2){
    var sum = num1+num2;
    return sum;
}
var total = add(50,20);
console.log(total);