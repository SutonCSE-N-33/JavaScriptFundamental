var num = 10; 
while(num <= 17){
    console.log(num);
    num++;
}

// for(var i = 0; i<5; i++){
//     console.log("The value of Forloop " + i);
// }

var nums = [1,2,3,4,5,6,7,8,9];
for(var i=0; i<nums.length; i++){
    var element = nums[i];
    console.log("The Value of Loop " + element);
}


//do while loop
let result = ' ';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5); 

console.log(result);
// expected result: "12345"