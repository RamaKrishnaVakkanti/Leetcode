/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memData = Array(m).fill().map(()=>Array(n).fill(0));

    for(let i=0;i<m;i++){
        memData[i][0] = 1;
    }
    for(let i=0;i<n;i++){
        memData[0][i] = 1;
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            memData[i][j] = memData[i-1][j]+memData[i][j-1];
        }
    }
    return memData[m-1][n-1];
};