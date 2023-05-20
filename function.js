function factorial(num){
    var product = 1;
    for(var i = num; i >= 1; i--){
        product = product * i;
    }
    return product;
}

console.log(factorial(5));
// console.log(factorial(10));