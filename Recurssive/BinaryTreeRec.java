import java.util.*;
public class BinaryTreeRec{
	private static class Node{
		private int data;
		private Node left;
		private Node right;
		public Node	(int data)
		{
			this.data=data;
		}
		public void setLeft(Node left)
		{
			this.left=left;
		}
		public void setRight(Node right)
		{
			this.right=right;
		}
	}
	public static void printLeaves(Node root)
	{
		if(root == null) return;
		if(root.left == null && root.right == null)
		{
			System.out.print(root.data + " => ");
			return;
		}
		if(root.left != null)
			printLeaves(root.left);
		if(root.right != null)
			printLeaves(root.right);
	}
	public static Node insertIntoBST(Node root, int data)
	{
		if(root == null)
		{
			root = new Node(data);
			return root;
		}
		if(root.data < data)
		{
			root.right=insertIntoBST(root.right, data);
		}else{
			root.left=insertIntoBST(root.left,data);
		}
		return root;
	}
	public static void inOrder(Node root)
	{
		if(root==null)
			return;
		inOrder(root.left);
		System.out.print(root.data + " = >");
		inOrder(root.right);
	}
	public static Node createBinaryTree()
	{
		Node root = new Node(3);
		Node nine = new Node(9);
		Node twenty = new Node(20);
		root.left=nine;
		root.right=twenty;
		twenty.left=new Node(15);
		twenty.right=new Node(7);
		return root;
	}
	public static void main(String args[])
	{
		Node root = createBinaryTree();
		inOrder(root);
		System.out.println(isBalanced(root));
	}
}
