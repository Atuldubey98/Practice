// abc - breadthFirst
// abd - depthFirst
const breadthFirstSearch = (root) => {
	const result = [];
	if (root === null) return result;
	const queue = [root];
	while (queue.length > 0) {
		const current = queue.shift();
		result.push(current.val);
		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return result;
};

module.exports = breadthFirstSearch;
