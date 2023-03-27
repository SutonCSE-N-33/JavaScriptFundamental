var age = [22,24,56,67,34,23];
var aduVai = age[3];
console.log(aduVai);
age[2] = 27;   
console.log(age);
var position = age.indexOf(34);
console.log(position);
age.push(17);
console.log(age);
age.pop();
console.log(age);





var teaLine = ["Nazrul","Asif","Kafil","Emon"];
teaLine.push("Jainal");
console.log(teaLine);
teaLine.pop();
console.log(teaLine);
teaLine.shift();
console.log(teaLine);
teaLine.unshift("Parthib Barua");
console.log(teaLine);
var part = teaLine.slice(2);
console.log(part);
var bigPart = teaLine.slice(0,2);
console.log(bigPart);
console.log(teaLine);
console.log("This is Length of Array: "+teaLine.length);