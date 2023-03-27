const normalPerson = {
    firstName: "Nazrul",
    lastName: "Islam",
    salary:15000,
    //Object r modde function use korle setake method bole
    getFullName:function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount,tax,tips){
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName:"hero",
    lastName:"Balam",
    salary:20000
}

const friendlyPerson = {
    firstName:"hero",
    lastName:"Golam",
    salary:30000
}

//normalPerson.getFullName();
//console.log(normalPerson.chargeBill(5000));

//Onnno akti object r method k arekti object r modde use korar jonn0 bind use kora hoi.
//bind,call,apply ai 3tar kaj same but call and aply directly parameter pass kora jai.
//apply r modde parameter gula array r modde diye patano hoi.

//const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//heroChargeBill(10000,2500,2500);
//console.log(heroPerson.salary);

//friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
//friendChargeBill(15000,2500,2500);
//console.log(friendlyPerson.salary);

normalPerson.chargeBill.call(heroPerson,10000,2500,2500);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson,[10000,2500,2500]);
console.log(friendlyPerson.salary);