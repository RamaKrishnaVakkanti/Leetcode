/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    const result = [];

    const permut = (index=0, local =[], localSum=0) => {
        console.log(index, local, localSum)
        if(localSum>target) return;
        if(localSum == target) return result.push(local);

        for(let i=index;i<candidates.length;i++){
            permut(i,[...local,candidates[i]],localSum+candidates[i]);
        }
    }
    permut();
    return result;
};