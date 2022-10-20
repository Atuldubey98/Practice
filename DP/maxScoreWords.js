/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
const getMap = (letters) => {
    const lettersMap = {};
    for (const letter of letters) {
        if (letter in lettersMap) {
            let count = lettersMap[letter];
            lettersMap[letter] = count + 1;
        } else {
            lettersMap[letter] = 1;
        }
    }
    return lettersMap;
};
var maxScoreWords = function (words, letters, score) {
    const lettersMap = getMap(letters);
    let maxScore=0;
    for(const word of words)
    {
        const wordMap = {};
        let s = 0;
        for(const c of word)
        {
            if (c in wordMap) {
                let count =  wordMap[c];
                wordMap[c]=count+1;
            }else{
                wordMap[c]=1;
            }
            if (c in lettersMap && (lettersMap[c] <= wordMap[c])) {
                s+=score[c];
            }else{
                s = 0;
            }
        }
        console.log(s);
        maxScore = Math.max(s,maxScore);
    }
    return maxScore;
};

console.log(
    maxScoreWords(
        ["dog", "cat", "dad", "good"],
        ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
        [
            1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
        ]
    )
);
