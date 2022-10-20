/**
 * @param {number[]} cost
 * @return {number}
 */
var getRow = function(rowIndex, memo={}) {
    if(rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    const row1 = getRow(rowIndex-1, memo);
    
};
