var reverseWords = function(s) {
    if (s===null || s=== "") {
        return "";
    }
    let ans = "";
    let strs=s.split(" ");
    for (const str of strs) {
        let reverse = "";
        for(let i =str.length-1;i>=0 ;i--)
            reverse+=str[i];
        ans+=`${reverse} `
    }
    return ans.trim();
};

console.log(reverseWords("Let's take LeetCode contest"));