const bestSum = (targetSum, nums, memo={})=>{
	if (targetSum in memo) {
		return memo[targetSum];
	}
	if (targetSum==0) {
		return [];
	}
	if (targetSum < 0) {
		return null;
	}
	let shortestLength = null;
	for(let num of nums)
	{
		let newSum = targetSum-num;
		let fetchedLength = bestSum(newSum,nums, memo);
		if (fetchedLength !== null) {
			let newLength = [...fetchedLength,num];
			if (shortestLength === null || shortestLength.length > newLength.length) {
				shortestLength=newLength;
			}
		}

	}

	memo[targetSum] = shortestLength;
	return shortestLength;
}

// n = target sum
// m = numbers.length

//Brute Force
//n is branching factor of the tree and m is height of tree
//Space complexity - O(m^2)
// Time Complexity - O(n^m * m)
console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(100,[1,2,5,25]))