/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
//     let stack = [asteroids[0]];
//     let length = asteroids.length;
//     for(let i=1;i<length;i++){
//         let newAst = asteroids[i];
//         let lastAst = stack.at(-1);
//         while(lastAst && (newAst>0 && lastAst<0) || (newAst<0 && lastAst>0)){
//             stack.pop();
//             newAst = last
            
//         }
//     }
    
    let asteroidsStack =[];
    
    for(let i=0;i<asteroids.length;i++){
        let lastAst = asteroidsStack.at(-1);
        let currentAst = asteroids[i];
        
        if((lastAst>0 && currentAst<0)){
            if(lastAst+currentAst === 0){
                asteroidsStack.pop();
            }else if(Math.abs(lastAst)<Math.abs(currentAst)){
                asteroidsStack.pop();
                i--;
            }
        }else{
            asteroidsStack.push(currentAst);
        }
    }
    return asteroidsStack;
};