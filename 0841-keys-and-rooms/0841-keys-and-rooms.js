/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let stack = [0];
    let visitedRooms=new Set();
   
    while(stack.length){
        let roomNum=stack.pop();
        if(!visitedRooms.has(roomNum)){
            stack.push(...rooms[roomNum]);
            visitedRooms.add(roomNum);
        }
    }
    return visitedRooms.size === rooms.length;
};