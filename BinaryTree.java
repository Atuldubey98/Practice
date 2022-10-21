import java.util.*;
public class BinaryTree{
	private TreeNode root;
	private class TreeNode{
		private int val;
		private TreeNode left;
		private TreeNode right;
		public TreeNode(int val)
		{
			this.val=val;
		}
	}
	public List<Integer> preOrderTraversalIter(TreeNode root)
	{
		List<Integer> response = new ArrayList<>();
		if(root==null)
			return response;
		Stack<TreeNode> stack = new Stack<>();
		stack.push(root);
		while(!stack.isEmpty())
		{
			TreeNode temp =stack.pop();
			response.add(temp.val);
			if(temp.right != null) stack.add(temp.right);
			if(temp.left != null) stack.add(temp.left);
		}
		return response;
	}
	public List<Integer> inOrderTraversalIter(TreeNode root)
	{
		List<Integer> response = new ArrayList<>();
		if(root==null)
			return response;
		Stack<TreeNode> stack = new Stack<>();
		TreeNode current = root;
		while(!stack.isEmpty() || current != null)
		{
			if(current != null)
			{
				stack.push(current);
				current=current.left;
			}else{
				current=stack.pop();
				response.add(current.val);
				current=current.right;
			}
		}
		return response;
		
	}
	public List<Integer> postOrderTraversalIter(TreeNode root)
	{
		List<Integer> response=new ArrayList<>();
		if(root==null)
			return response;
		Stack<TreeNode> stack=new Stack<>();
		TreeNode current=root;
		while(!stack.isEmpty()||current != null)
		{
			if(current!=null)
			{
				stack.push(current);
				current=current.left;
			}else{
				TreeNode temp = stack.peek().right;
				if(temp==null)
				{
					temp=stack.pop();
					response.add(temp.val);
					while(!stack.isEmpty()&&stack.peek().right ==temp)
					{
						temp=stack.pop();
						response.add(temp.val);
					}
				}else{
					current=temp;
				}
			}
		}
		return response;
	}
	public boolean isSymmetric(TreeNode root)
	{
		return root==null||isSymmetricHelper(root.left, root.right);
	}
	public boolean isSymmetricHelper(TreeNode left, TreeNode right)
	{
		if(left==null || right == null)
			return left==right;
		if(left.val != right.val)
			return false;
		return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
	}
	public int maxInBinaryTree(TreeNode root)
	{
		if(root==null)
			return Integer.MIN_VALUE;
		int max = root.val;
		int left = maxInBinaryTree(root.left);
		int right = maxInBinaryTree(root.right);
		max = Math.max(left,max);
		max = Math.max(right,max);
		return max;
	}
	
	public void createBinaryTree()
	{
		this.root=new TreeNode(1);
		TreeNode two = new TreeNode(2);
		TreeNode three = new TreeNode(3);
		TreeNode four = new TreeNode(4);
		TreeNode five = new TreeNode(5);
		TreeNode six = new TreeNode(6);
		TreeNode seven = new TreeNode(7);
		TreeNode eigth = new TreeNode(8);
		this.root.left=two;
		two.left=three;
		three.left=four;
		four.left=five;
	}
	public void createBinaryTree2()
	{
		this.root=new TreeNode(1);
		TreeNode two = new TreeNode(2);
		TreeNode three = new TreeNode(2);
		TreeNode four = new TreeNode(3);
		TreeNode five = new TreeNode(4);
		TreeNode six = new TreeNode(4);
		TreeNode seven = new TreeNode(3);
		this.root.left=two;
		this.root.right=three;
		two.left=four;
		two.right=five;
		three.left=six;
		three.right=seven;
	}
	public void preOrderTraversal(TreeNode root)
	{
		if(root==null)
			return ;
		System.out.print(root.val + " ");
		preOrderTraversal(root.left);
		preOrderTraversal(root.right);
	}
	
	public void inOrderTraversal(TreeNode root)
	{
		if(root==null)
			return;
		inOrderTraversal(root.left);
		System.out.print(root.val + " ");
		inOrderTraversal(root.right);
	}
	public void postOrderTraversal(TreeNode root)
	{
		if(root==null)
			return;
		postOrderTraversal(root.left);
		postOrderTraversal(root.right);
		System.out.print(root.val + " ");
	}
	public int heightOfTree(TreeNode root)
	{
		if(root==null)
			return 0;
		int left = heightOfTree(root.left);
		int right = heightOfTree(root.right);
		return 1 + Math.max(left,right);
	}
	
	public static void sout(Object o)
	{
		System.out.println(o);
	}
	public static int sumOfLeftLeaves(TreeNode root)
	{
		if(root==null)
			return 0;
		return 0;
	}
	public static void main(String args[])
	{
		BinaryTree binaryTree = new BinaryTree();
		binaryTree.createBinaryTree();
		TreeNode root=binaryTree.root;
		
	}
}
