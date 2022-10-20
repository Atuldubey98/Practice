const howSumTable = (target, numbers)=>{
	const table=Array(target+1).fill(null);
	table[0]=[];
	for(let i =0;i<=target;i++)
	{
		if (table[i]!==null) {
			for(num of numbers)
			{
				table[i+num]=[...table[i],num];
			}
		}
	}
	return table[target];
}

console.log(howSumTable(7,[2,2,3]))