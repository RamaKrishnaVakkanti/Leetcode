/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let stack = [0];
    let visited={};
    
    while(stack.length){
        let roomNum=stack.pop();
        if(!visited[roomNum]){
            stack.push(...rooms[roomNum]);
            visited[roomNum]=1;
        }
    }
    return Object.keys(visited).length === rooms.length;
};