// let year = 2000;
// if(year % 400 == 0){
//     console.log("The Year Is Leap year");
// }else if(year % 4 == 0 && year % 100 != 0){
//     console.log("The Year Is Leap year");
// }else{
//     console.log("The year is not Leap Year");
// }

function leapYear(year){
    if(year % 400 == 0){
         return "The Year Is Leap year";
    }else if(year % 4 == 0 && year % 100 != 0){
        return "The Year Is Leap year";
    }else{
        return "The Year Is not Leap year";
    }
}

const thisYear = leapYear(2022);
console.log(thisYear);