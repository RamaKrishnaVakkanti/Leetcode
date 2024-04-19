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
    
    for(let letter of s){
        if(letter !== '*'){
            output=output+letter;
        } 
        else{
            output=output.slice(0,output.length-1);
        }
    }
    return output;
};