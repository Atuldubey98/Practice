/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m===0 && n ===0 ) {
        return 0;
    }
    let max = 0;
    let table =  Array(m+1).fill().map(()=>Array(n+1).fill(0));
    table[1][1]=1;
    for(let i=0;i<=m;i++)
    {
        for(let j=0;j<=n;j++)
        {
            const current = table[i][j];
            if (j+1 <= n) {
                table[i][j+1]+=current;
            }
            if (i+1<= m) {
                table[i+1][j]+=current;
            }
             max = Math.max(table[i][j],max);
        }
    }
    return max;
};

console.log(uniquePaths(3,7));