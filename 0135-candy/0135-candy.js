/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let forwardCandy = new Array(ratings.length).fill(1);
    let backwardCandy = new Array(ratings.length).fill(1);
    
    for(let i=1;i<ratings.length;i++) if(ratings[i]>ratings[i-1]) forwardCandy[i]=forwardCandy[i-1]+1;
    for(let i=ratings.length-2;i>=0;i--) if(ratings[i]>ratings[i+1]) backwardCandy[i]=backwardCandy[i+1]+1;
    
    let output = 0;
    for(let i=0;i<ratings.length;i++) output +=Math.max(forwardCandy[i],backwardCandy[i]);
    return output;
};