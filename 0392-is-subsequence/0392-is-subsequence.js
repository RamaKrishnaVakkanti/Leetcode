/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let temp =0; 
    for(let i=0;i<t.length && temp<s.length;i++){
        if(s[temp] == t[i]){
            temp = temp+1;
        }
    }
    return temp == s.length;
};