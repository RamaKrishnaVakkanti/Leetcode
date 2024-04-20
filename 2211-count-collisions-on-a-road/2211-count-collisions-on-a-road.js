var countCollisions = function(directions) {
    let directionsArray = directions.split(""), vehicleStack = [], output = 0;
    for (let i = 0; i < directionsArray.length; i++) {
        let lastVehicle = vehicleStack.at(-1);
        let currentVehicle = directionsArray[i];
        if (currentVehicle == 'L' && lastVehicle == 'R') {
            //In this case both are moving in oposite Direction, Collision will happens.
            output += 2;
            // Removing the last "R" and update the current index vlue to "S", because after collision both vehicle will be in stable ("S") state
            vehicleStack.pop();
            directionsArray[i] = 'S';
            // Moving index to back to check this again with the top element in the vehicle stack.
            i--;
        } else if (currentVehicle == 'L' && lastVehicle == 'S') output += 1;
        else if (currentVehicle == 'S' && lastVehicle == 'R') {
            // Here collision will happen and we also need to check with previous elements in the stack.
            output += 1;
            vehicleStack.pop();
            i--;
        } else vehicleStack.push(currentVehicle);
    }
    return output;
};