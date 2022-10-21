const greaterPathSum = (root) => {
	if (root === null) return -Infinity;
	if (root.left === null || root.right === null) return root.val;
	return (
		root.val +
		Math.max(greaterPathSum(root.right), greaterPathSum(root.left))
	);
};

module.exports = greaterPathSum;
