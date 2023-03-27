function feetToMile(defineFeet){
    var feetResult = (defineFeet /5280).toFixed(10);
    
    return feetResult;
}
const feet = feetToMile(10800);
console.log(feet);



function woodCalculator(chair,table,khat){
    var needWoodForChair = 2;
    var needWoodForTable = 3;
    var needWoodForKhat = 5;

    var woodChair = chair * needWoodForChair;
    var woodTable = table * needWoodForTable;
    var woodKhat = khat * needWoodForKhat;

    var totalWood = (woodChair + woodTable + woodKhat);
    return totalWood;
}

const sumWood = woodCalculator(3,3,3);
console.log(sumWood);



function brickCalculator(floor){
    if(floor <= 10 ){
        var floorHeight = 15*1000;
        return floor*floorHeight;
    }else if(floor <= 20){
        var floorHeight = 12*1000;
        return floor*floorHeight;
    }else{
        var floorHeight = 10*1000;
        return floor*floorHeight;
    }
}

const needBrick = brickCalculator(21);
console.log(needBrick);


function tinyFriend(friends){
       var min = friends[0];
       for(var i =0; i<friends.length; i++){
           var element = friends[i];
           if(element < min){
               min = element;
           }
       }
       return min;
}

var friendCircle = [23,22,21,18,16,15,14,19];
var smallFriend = tinyFriend(friendCircle);
console.log(smallFriend);