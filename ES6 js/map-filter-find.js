const student = [
    {id:1,name:"Nazrul islam"},
    {id:2,name:"Parthib barua"},
    {id:3,name:"Shrabonti mitra"},
    {id:4,name:"Anik Mollik"},
    {id:5,name:"Partha Chawdury"}
]

for(let i = 0; i<student.length; i++){
    const element = student[i];
    const id = element.id;
    const name =element.name;
    console.log(id,name);
}
