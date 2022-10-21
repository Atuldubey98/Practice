// const totalSum = (root) => {
// 	if (root === null) return 0;
// 	return totalSum(root.left) + totalSum(root.right) + root.val;
// };

const totalSum = (root) => {
	if (root === null) return 0;
	const queue = [root];
	let sum = 0;
	while (queue.length > 0) {
		const current = queue.shift();
		sum += current.val;
		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return sum;
};

module.exports = totalSum;
