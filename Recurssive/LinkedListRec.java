public class LinkedListRec{
	private static class Node{
		private int data;
		private Node next;
		public Node(int data)
		{
			this.data=data;
		}
		public void setNext(Node node)
		{
			this.next = node;
		}
	}
	private static Node setEachNext(Node nodes[])
	{
		Node head = nodes[0];
		for(int i = 1;i< nodes.length;i++)
		{
			head.next = nodes[i];
			head=head.next;
		}
		return nodes[0];
	}
	public static void printLL(Node head)
	{
		Node current = head;
		while(current != null)
		{
			System.out.print(current.data + "=>");
			current=current.next;
		}
		System.out.println();
	}
	public static Node reverseLL(Node head)
	{
		if(head==null || head.next==null)return head;
		Node last = reverseLL(head.next);
		head.next.next=head;
		head.next=null;
		return last;
	}
	public static Node mergeSorted(Node A, Node B)
	{
		if(A == null)
			return B;
		if(B == null)
			return A;
		if(A.data < B.data)
		{
			A.next=mergeSorted(A.next,B);
			return A;
		}
		B.next=mergeSorted(B.next, A);
		return B;
	}
	public static void main(String args[])
	{
		Node n1 =new Node(1);
		Node n2 =new Node(2);
		Node n3 =new Node(3);
		Node n4 =new Node(4);
		Node n5 =new Node(5);
		Node n6 =new Node(6);
		Node n7 =new Node(7);
		Node n8 =new Node(8);
		Node n9 =new Node(9);
		Node n10 =new Node(10);
		
		Node head1 = setEachNext(new Node[]{n1, n2, n3, n4, n5});
		Node head2 = setEachNext(new Node[]{n6, n7, n8, n9, n10});
		printLL(head1);
		printLL(head2);
		Node sortedHead = mergeSorted(head1,head2);
		printLL(sortedHead);
	}
}
