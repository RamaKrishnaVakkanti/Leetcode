/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    directions = directions.split("");
    let vehicleStack = [];
    let output = 0;
    for(let i=0;i<directions.length;i++){
        let lastVehicle = vehicleStack.at(-1);
        let currentVehicle = directions[i];
        
        if(currentVehicle == 'L'){
            if(lastVehicle == 'R'){
                output+=2;
                vehicleStack.pop();
                directions[i]='S';
                i--;
            }else if(lastVehicle =='S'){
                output+=1;
            }
        }else if(currentVehicle == 'S' && lastVehicle == 'R'){
            output+=1;
            vehicleStack.pop();
            i--;
        }else{
            vehicleStack.push(currentVehicle);
        }        
    }
    return output;
};