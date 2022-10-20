import java.util.*;
public class GraphRec{
	private static class Node{
		private List<Node> neighbours;
		private int data;
		public Node(int data)
		{
			this.neighbours=new ArrayList<>();
			this.data=data;
		}
		public void add(Node n)
		{
			this.neighbours.add(n);
		}
		public List<Node> getNeighbours()
		{
			return this.neighbours;
		}	
	}
	public static boolean dfs(Node root, Set<Node> visited, int value)
	{
		if(root==null)
			return false;
		if(root.data == value)
			return true;
		for(Node nei : root.getNeighbours())
		{
			if(visited.contains(nei)) continue;
			visited.add(nei);
			boolean found=dfs(nei,visited,value);
			if(found==true)
				return true;
		}
		return false;
	}
	public static void main(String args[])
	{
		Node root = new Node(1);
		Node n2 = new Node(1);
		Node n3 = new Node(3);
		Node n5 = new Node(5);
		Node n6 = new Node(6);
		root.add(n2);
		root.add(n3);
		root.add(n5);
		n3.add(n6);
		System.out.println(dfs(root,new HashSet<>(), 4));
	}

}
