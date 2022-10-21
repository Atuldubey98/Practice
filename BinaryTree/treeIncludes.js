// const treeIncludes = (root, target) => {
// 	if (root === null) return false;
// 	const queue = [root];
// 	while(queue.length > 0)
// 	{
// 		const current = queue.shift();
// 		if (current.val===target) return true;
// 		if (current.left !== null) queue.push(current.left);
// 		if (current.right !== null) queue.push(current.right);
// 	}
// 	return false;
// };

const treeIncludes = (root, target) => {
	if (root === null) return false;
	if (root.val === target) return true;
	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};
module.exports = treeIncludes;
