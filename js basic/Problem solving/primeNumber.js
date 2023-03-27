function prime(num){
    for(let i=2; i<num; i++){
        if(num%i == 0){
            return "The Number is Not Prime";
        }
        return "The Number is Prime "
    }
}

const checkPrime = prime(3);
console.log(checkPrime);