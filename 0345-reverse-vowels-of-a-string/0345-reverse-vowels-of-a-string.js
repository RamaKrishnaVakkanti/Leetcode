/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = {'a':1,'e':1,'i':1,'o':1,'u':1,'A':1,'E':1,'I':1,'O':1,'U':1};
    
    let vow = "";
    
    let length = s.length;
    for(let i=0;i<length;i++){
        if(vowels[s[i]]){
            vow=vow+s[i];
            s = s.slice(0,i)+'_'+s.slice(i+1);
        }
    }
    count = 1;
    for(let i=0;i<length;i++){
        if(s[i]=='_'){
            s = s.slice(0,i)+vow.at(-count)+s.slice(i+1);
            count++;
        }
    }
    return s;
};