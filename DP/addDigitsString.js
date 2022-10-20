/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0;
    let i = num1.length-1, j = num2.length-1;
    let ans="";
    while (i >= 0 || j>=0) {
        let sum = 0;
        if (i >= 0) {
            sum+=Number(num1[i]);
        }
        if (j>=0) {
            sum+=Number(num2[j]);
        }
        sum+=carry;
        carry=0;
        if (sum>=10) {
            carry=Math.floor(sum/10);
            sum=Math.floor(sum%10);
        }
        ans=`${sum}${ans}`
        i--;
        j--;
    }
    if (carry > 0) {
        ans=`${carry}${ans}`
    }
    return ans;
};

console.log(addStrings("777", "777"));