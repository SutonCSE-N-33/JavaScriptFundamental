var averagePerson = [34,56,78,55,12,66,34,55,66,12];
var uniquePerson = [];
for(var i = 0; i<averagePerson.length; i++){
    var element = averagePerson[i];
    var indexOfUniqePerson = uniquePerson.indexOf(element);
    if(indexOfUniqePerson == -1){
        uniquePerson.push(element);
    }
}
console.log(uniquePerson);