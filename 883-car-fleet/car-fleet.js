/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let positions = [];
    position.forEach((currVal, index) => {
        let time = (target - currVal) / speed[index]
        positions.push([currVal, speed[index], time]);
    })

    positions.sort((a, b) => {
        return b[0] - a[0];
    })
    console.log(positions)

    let index = 1;
    let count = 1;
    let lastTime = positions[0][2];
    while (index < positions.length) {

        if (positions[index][2] <= lastTime) {
            lastTime = Math.max(lastTime, positions[index][2]);
        } else {
           count++;
           console.log(positions[index])
           lastTime = positions[index][2];      
        }

        index++;
    }

    return count;
};