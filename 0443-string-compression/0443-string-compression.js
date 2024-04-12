/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    let count =1;
    let output = chars[0];
    
    for(let i=1;i<chars.length;i++){
        if(chars[i] === chars[i-1]) count++;
        else{
            output=count>1 ? output+count+chars[i] : output+chars[i];
            count=1;
        }
    }
    if(count>1) output = output+count;
    chars.length=0;
    for(let char of output){
        chars.push(char);
    }
    chars = output.split("");
};