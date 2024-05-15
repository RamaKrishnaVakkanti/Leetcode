/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>a-b);
    let output=0;
    let count=0;
    let select = true;
    let index= happiness.length-1;
    while(select){
        if(count<k && happiness[index]-count>0){
            output= output+ happiness[index]-count;
            index--;
            count++;
        }else select =false;
    }
    return output;
};