var addDigits = function(num) {
    if (num<10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        let r = Math.floor(num%10);
        sum+=r;
        num=Math.floor(num/10);
    }
    return addDigits(sum);
};

console.log(addDigits(38));
