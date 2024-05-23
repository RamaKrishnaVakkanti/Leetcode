/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
//     const result = {}
//     const permut = (values, sum)=>{
//         for(let i=0;i<candidates.length;i++){
//             let localSum = sum+candidates[i];
//             if(localSum==target) result[[...values,candidates[i]].sort((a,b)=>a-b).join("")]=1;
//             else if(localSum>target) continue;
//             else{
//                 permut([...values,candidates[i]], localSum);
//             }
//         }
//     }
//     permut([],0);
//     return Object.keys(result).map((str)=>str.split(""));
    

    

      const result = []
  

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