const person = {
    name:"Nazrul islam",
    age:17,
    job:"FaceBooker",
    gfName:"Null",
    fatherName:"Bodor alom",
    motherName:"NurKhatun"

}
// const name = person.name;
// const job = person.job;
// const {name,job} = person;
// console.log(name,job);

const friends = ["Nazrul islam","Emon","Joinal","Kafil","Paarthib"];
const [firstFriend,...allFriends] = friends;
console.log(allFriends);
