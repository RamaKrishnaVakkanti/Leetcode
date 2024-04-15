/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
    
//     intervals.sort((a,b)=>{
//         if(a[1]!=b[1]){
//             return a[1]-b[1];
//         }else{
//             return a[0]-b[0];
//         }
//     })    
//     let start = 0;
//     let startValue = intervals[0][0];
//     let output = [];
//     for(let i=0;i<intervals.length;i++){    
//         startValue = (intervals[i][0]<startValue) ? intervals[i][0]: startValue;
//         if(intervals[i+1] && intervals[i][1]>=intervals[i+1][0]){
//             continue;
//         };
//         if(start == i) output.push(intervals[i]);
//         else{
            
//             output.push([startValue, intervals[i][1]]);
//         }
//         start = i+1;
//     }
//     return output;
// };
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for(let [start, end] of intervals) {
        const endPrev = result.at(-1)[1]
        if(start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
        else result.push([start, end]);
    }
    return result;
};