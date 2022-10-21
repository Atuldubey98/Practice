// const depthFirstSearch = (root) => {
// 	const result = [];
// 	if (root === null) return result;
// 	const stack = [root];
// 	while (stack.length > 0) {
// 		const current = stack.pop();
// 		result.push(current.val);
// 		if (current.right !== null) stack.push(current.right);
// 		if (current.left !== null) stack.push(current.left);
// 	}
// 	return result;
// };

const depthFirstSearch = (root) => {
	if (root === null) return [];
	const leftValues = depthFirstSearch(root.left);
	const rightValues = depthFirstSearch(root.right);
	return [...root.val, ...leftValues, ...rightValues];
};

module.exports = depthFirstSearch;
