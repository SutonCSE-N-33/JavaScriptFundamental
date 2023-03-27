function argumentFunction(name,age){
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        console.log(element);
    }
}

argumentFunction("Nazrul islam",23,"Pekua Coxsbazar","BGC Trust University Bangladesh","Department of CSE");