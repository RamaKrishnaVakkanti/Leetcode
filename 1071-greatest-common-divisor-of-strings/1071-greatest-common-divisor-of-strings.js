/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    output = "";
    if(str1 == str2) return str1;
    let smallest = str1.length<str2.length ? str1 : str2;
    for(let i=0;i<smallest.length;i++){
        if(str1.replaceAll(str1.slice(0,i+1),"")== "" && str2.replaceAll(str1.slice(0,i+1),"") == ""){
                output=  str1.slice(0,i+1);
            }
    }
    return output;
};