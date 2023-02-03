/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    const stations = gas.map((ele, index) => {
        return {
            cost: (gas[index] - cost[index]),
            visited: false
        };
    })

    const isViable = (index) => {

        let steps = gas.length;
        let sum = 0;
        while (steps > 0) {

            if (index === gas.length) index = 0;
            sum += stations[index].cost;
            if (sum < 0) return index;
            stations[index].visited = true;
            index++;
            steps--;
        }


        return -1;
    }


    let index = 0;

    while (index < cost.length) {


        if (stations[index].cost >= 0) {

            if (stations[index].visited === false) {
                let newIndex = isViable(index);
                console.log(newIndex);
                if (newIndex === -1) return index;
            }

        }

        index++;
    }



    return -1;
};
