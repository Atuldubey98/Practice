const canSumTable = (target, numbers)=>{
	const table = Array(target+1).fill(false);
	table[0]=false;
	for (let i = 0; i <= target; i++) {
		if (table[i]===true) {
			for(num of numbers)
			{
				if (i) {}
				table[i+num]=true;
			}
		}
	}
	return table[target];
}