/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let largestLen = 0;
    let vowels = ['a','e','i','o','u'];

    // for(let i=0;i<=s.length-k;i++){
    //     let temp = s.substring(i,i+k);
    //     let tempLen = 0;
    //     let subTemp =0 ;
    //     while(temp.length>0){
    //         // subTemp = temp[0];
    //         console.log('1');
    //         if(vowels.includes(temp[0])) tempLen = tempLen+temp.split(temp[0]).length-1;     
    //             temp = temp.replaceAll(temp[0],'');
    //             console.log(temp.length);
    //     }
    
    //     if(largestLen<tempLen){
    //         largestLen = tempLen;
    //     } 
    // }
    // return largestLen;

    let tempLen =0;
    for(let i = 0;i<k;i++){
        if(vowels.includes(s[i])) largestLen ++;
    }

    if(largestLen == k) return largestLen;

    tempLen = largestLen;

    for(let i=1;i<=s.length-k;i++){
        if(vowels.includes(s[i-1])) tempLen --;
        if(vowels.includes(s[i+k-1])) tempLen ++;
        if(tempLen == k) return tempLen;

        if(tempLen>largestLen) largestLen  = tempLen;

    }
    return largestLen;
};