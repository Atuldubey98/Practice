public class MergeSort{
	public static void mergeSort(int []data, int start, int end)
	{
		if(start < end)
		{
			int mid = (start+end)/2;
			mergeSort(data, start, mid);
			mergeSort(data, mid+1, end);
			merge(data,start,mid,end);
		}
	}
	public static void merge(int []data, int start, int mid, int end)
	{
		int temp[]=new int[end-start+1];
		int i = 0;
		int j = mid+1;
		int k = 0;
		//while both arrays has values
		while(i<=mid&&j<=end)
		{
			if(data[i] <= data[j])
			{
				temp[k++]=data[i++];
			}else{
				temp[k++]=data[j++];
			}
		}
		//while i to mid has values
		while(i<=mid)
		{
			temp[k++]=data[i++];
		}
		// adding the values of right subarray to temp array
		while(j<=end)
		{
			temp[k++]=data[j++];
		}
		// we override the values at each subarray
		for(i=start;i<=end;i++)
			data[i]=temp[i-start];
	}
	public static void main(String args[])
	{
		int data[]=new int []{1,23,2,4,5,3,1};
		mergeSort(data,0,data.length-1);
		System.out.println("stop");
	}
}
