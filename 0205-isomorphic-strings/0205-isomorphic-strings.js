/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const smap ={}, tmap={};
    
    for(let i=0;i<s.length;i++){
        
        if(!smap[s[i]]) smap[s[i]] = t[i];
        else{
            if(smap[s[i]] !=t[i]) return false;
        }
        
        if(!tmap[t[i]]) tmap[t[i]] = s[i];
        else{
            if(tmap[t[i]] !=s[i]) return false;
        }
    }
    return true;
    
//     const sMap = {};
//     const tMap = {};

//     const map ={};
    
//     for(let i=0;i< s.length;i++){
//         sMap[s[i]] = sMap[s[i]] ? sMap[s[i]]+i : i+"";
//         tMap[t[i]] = tMap[t[i]] ? tMap[t[i]]+i : i+"";
//     };

//     for(let i = 0 ;i<s.length;i++){
//         if(sMap[s[i]] != tMap[t[i]]) return false;
//     }
//     return true;
};