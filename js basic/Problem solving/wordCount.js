var speech = "I am a  good Person,I don't snore at night";
// console.log(speech.length);
var count = 0;
for(var i = 0; i<speech.length; i++){
    var element = speech[i];
    if(element == " " && speech[i-1] != " "){
        count++;
    }
}
console.log(count);