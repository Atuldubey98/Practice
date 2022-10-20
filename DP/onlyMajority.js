/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
   this.arr=Array(arr.length);
   this.memo={}
   for(let i=0;i<arr.length;i++)
   {
        if (arr[i] in this.memo) {
            let count = this.memo[arr[i]];
            this.memo[arr[i]]=count+1;
        }else{
            this.memo[arr[i]] = 1;
        }
        this.arr[i]=arr[i];
   }
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
    
};

 
var obj = new MajorityChecker([1, 1, 2, 2, 1, 1])
var param_1 = obj.query(0,0,1)
