/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    return (s.split(" ").filter((str)=>str !="").reverse().join(" "));
    // console.log(s.split(" ").filter((str)=>str !=""))
    
};