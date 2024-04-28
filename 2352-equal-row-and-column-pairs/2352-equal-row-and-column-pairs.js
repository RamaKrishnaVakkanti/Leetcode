/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = {};
    let output=0;
    
    for(let i=0;i<grid.length;i++){
        let num = '-'+grid[i].join("-");
        rowMap[num] = rowMap[num] ? rowMap[num]+1 : 1;
    }
    
     for(let i=0;i<grid.length;i++){
        let colNum = "";
        for(let j=0;j<grid.length;j++){
            colNum = colNum+'-'+grid[j][i];
        }
        if(rowMap[colNum]) output= output+rowMap[colNum];
    }
    return output;
};