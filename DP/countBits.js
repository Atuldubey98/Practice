/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const response = Array(n+1).fill(0);
    for (let i = 0; i <=n; i++) {
        response[i]=solve(i);
    }
    return response;
};
const solve = (n) =>{
    if (n < 2) {
        return n;
    }
    if (n%2===0) {
        return solve(Math.floor(n/2));
    }
    return 1+solve(Math.floor(n/2));
}

console.log(countBits(5))