/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let output=[];    
    for(let count=0;count<arr2.length;count++){
        if(arr1.indexOf(arr2[count])==-1) output.push(arr2[count]);
        while(arr1.indexOf(arr2[count])>-1){
            output.push(arr2[count]);
            arr1[arr1.indexOf(arr2[count])]='-';
        }
    }
    
    arr1 = arr1.filter(value=> value !=='-');
    arr1.sort((a,b)=>a-b);
    return [...output, ...arr1];
};