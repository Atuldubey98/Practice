// const treeMin = (root) => {
// 	if (root === null) return Infinity;
// 	let min = Infinity;
// 	const queue = [root];
// 	while (queue.length > 0) {
// 		const current = queue.shift();
// 		min = Math.min(current.val, min);
// 		if (current.left !== null) queue.push(current.left);
// 		if (current.right !== null) queue.push(current.right);
// 	}
// 	return min;
// };

const treeMin = (root) => {
	if (root === null) return Infinity;
	return Math.min(root.val, treeMin(root.left), treeMin(root.left));
};
module.exports = treeMin;
