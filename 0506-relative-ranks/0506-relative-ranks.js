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
    console.log(output, temp);
    
    for(let i=0;i<score.length;i++){
        console.log(temp.indexOf(score[i]),temp.indexOf(score[i])>2, temp.indexOf(score[i])+1,map[temp.indexOf(score[i])+1]);
        output[i] = temp.indexOf(score[i])>2?(temp.indexOf(score[i])+1)+"" : map[temp.indexOf(score[i])+1];
    }
    return output;
};