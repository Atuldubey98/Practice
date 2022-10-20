const canConstruct = (target, wordBank, memo={})=>{
	if (target in memo) {
		return memo[target];
	}
	if (target=== "") {
		return true;
	}
	for(let word of wordBank)
	{
		if (target.indexOf(word)===0) {
			const suffix = target.slice(word.length);
			const answer = canConstruct(suffix, wordBank, memo);
			memo[target]=answer;
			if (answer=== true) {
				return true;
			}
		}
	}
	memo[target]=false;
	return false;
}
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboared", ["bo", "rd", "ate","t","ska", "ska", "boar"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeee"]));
