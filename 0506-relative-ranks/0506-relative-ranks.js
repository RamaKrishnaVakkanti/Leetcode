/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let temp = [...score];
    
    temp.sort((a,b)=>b-a);
    let map={
        1: "Gold Medal",
        2: "Silver Medal",
        3: "Bronze Medal"
    }
    
    let output = new Array(score.length).fill(0);
    
    for(let i=0;i<score.length;i++) {
        let index = temp.indexOf(score[i]);
        output[i] = index>2?(index+1)+"" : map[index+1];
    }
    return output;
};