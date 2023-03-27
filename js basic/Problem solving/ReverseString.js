function reversString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var element = str[i];
        reverse = element + reverse;
    }
    return reverse;
}
var statement = "Hellow,I am Nazrul islam Suton";
var result = reversString(statement);
console.log(result);