const normalPerson = {
    firstName:"Nazrul",
    lastName:"islam",
    salary:5000,
    getFullName:function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount,tips,tax){
             console.log(this);
             this.salary = this.salary - amount - tips - tax;
             return this.salary;
    }

}

const heroPerson = {
    firstName:"Jamal",
    lastName:"uddin",
    salary:30000
}

const friendlyPerson = {
    firstName:"Hero",
    lastName:"alam",
    salary: 50000
}


// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// console.log(heroChargeBill(2000));
// console.log(friendChargeBill(20000));

const heroChargeBill = normalPerson.chargeBill.call(heroPerson,15000,300,200);
console.log(heroChargeBill);
const friendChargeBill = normalPerson.chargeBill.apply(friendlyPerson,[20000,300,200]);
console.log(friendChargeBill);