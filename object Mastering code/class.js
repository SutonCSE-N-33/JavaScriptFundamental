class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.parentName = "Badrul Alam"
    }
}

class Worker extends Student{
       constructor(id,studentName,firstName,lastName,salary){
        super(id,studentName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
       }
       getFullName(){
        return this.firstName+" "+this.lastName;
       }
}

const student1 = new Student(24,"Nazrul islam");
const student2 = new Student(26,"Sifat");

const worker = new Worker(24,"Nazrul islam","Abdul","Himid",15000);
console.log(worker);
console.log(worker.getFullName());