/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
//     let index =s.indexOf('*');
//     while(index !== -1){
//         s = s.slice(0,index-1)+s.slice(index+1);
//         index = s.indexOf('*');
//     }
//     return s;
    
    let output ='';
    let length =0;
    for(let letter of s){
        if(letter !== '*'){
            output=output+letter;
            length+=1;
        } 
        else{
            output=output.slice(0,length-1);
            length-=1;
        }
    }
    return output;
};