/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/*

The idea is pretty simple ,

1. Calculate the net cost of a station : net cost of a station is cost a vehicle has to bear when visting a station 
net cost = gas[index] - cost[index];
2. If a station has net cost as negative that means it can never be starting point 


Here main thing to remember to think is if you start from station and while moving if at any point net sum(fuel) becomes zero , that means any station
the  has come in the way can't be starting station . This is main crux of the problem.





**/



var canCompleteCircuit = function (gas, cost) {

    //calculate netcost of all stations
    const stations = gas.map((ele, index) => {
        return {
            cost: (gas[index] - cost[index]),
            visited: false
        };
    })

    const isViable = (index) => {

        let steps = gas.length;
        let sum = 0;// consider this as total fuel.
        while (steps > 0) {

            if (index === gas.length) index = 0;//if while moving you have come to end of array, make index = 0 just to move from start
            sum += stations[index].cost; //calculate the net feul
            if (sum < 0) return index;//if fuel is negative, can't move forward
            stations[index].visited = true;//mark all index as visited as they come in path
            index++;
            steps--; 
        }


        return -1;
    }


    let index = 0;

    while (index < cost.length) {


        if (stations[index].cost >= 0) {

            if (stations[index].visited === false) //is a index is not yet visited {
                let newIndex = isViable(index);
                if (newIndex === -1) return index;
            }

        }

        index++;
    }



    return -1;
};
