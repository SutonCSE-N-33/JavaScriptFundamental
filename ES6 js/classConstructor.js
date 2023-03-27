class Student{
    constructor(id,name,phone,roll){
         this.id = id,
         this.name = name,
         this.phone = phone,
         this.roll = roll
    }
}
const student1 = new Student(1,"Nazrul islam",01816249784,3);
// console.log(student1.phone);


class Parent{
    constructor(){
        this.fatherName = "Bodor alom",
        this.motherName = "Nur Khatun"
    }
}

class Child extends Parent{
    constructor(id,name,age,address){
             super();
             this.id = id,
             this.name = name,
             this.age = age,
             this.address = address
    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}
const child1 = new Child(1,"Nazrul islam",23,"Rajakhali Pekua coxsBazar");
console.log(child1.getFullName());