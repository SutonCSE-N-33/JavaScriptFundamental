function explain_callback(name,age,task){
    console.log("This is name:" + name);
    console.log("This is Your Age: "+ age);
    task();
}

function washHand(){
    console.log("Please Wash Your Hand with soap");
}

function takeShower(){
    console.log("Please take Your shower");
}

explain_callback("Mr.sogir",33,washHand);
explain_callback("Mr.Dobir",35,takeShower);