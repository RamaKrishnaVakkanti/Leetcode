/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n<=4) return 0;
    let fact = BigInt(1);
    let i = BigInt(1);
    for( i;i<=n;i++){
        fact *=i;
    }
    fact = fact+'';
    let count = 0;
    let length = fact.length-1;
    while(fact[length--] == 0) count++;
    return count;
};