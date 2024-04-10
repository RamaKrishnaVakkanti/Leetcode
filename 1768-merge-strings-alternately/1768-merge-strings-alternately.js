/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = '';
    let count = 0;
    
    while(word1.length && word2.length){
        if(count %2 == 0){
            output = output+word1[0];
            word1 = word1.slice(1);     
        }else{
            output = output+word2[0];
            word2 = word2.slice(1);
        }
        count++;
    }
    if(word1.length){
        output = output+word1;
    }
    
    if(word2.length){
        output = output+word2;
    }
    return output;
};