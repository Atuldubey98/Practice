
const countConstruct = (target, wordBank, memo={})=>{
	if (target in memo) {
        return memo[target];
    }
    if (target === "") {
        return 1;
    }
    let totalCount=0;
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWays = countConstruct(target.slice(word.length),wordBank, memo);
            totalCount+=numWays;
        }
    }
    memo[target]=totalCount;
    return totalCount;
}

console.log(countConstruct("purple", ['purp', 'p', 'ur', 'le', "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboared", ["bo", "rd", "ate","t","ska", "ska", "boar"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee", "eeee"]));
