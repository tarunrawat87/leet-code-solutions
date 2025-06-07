/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {

    let jobs = [];
    let index = 0;

    while (index < startTime.length) {
        jobs.push([startTime[index], endTime[index], profit[index]]);
        index++;
    }

    jobs.sort((a, b) => {
        return a[0] - b[0]
    });

    let cache = {};
    const jobsSchedulingUtil = (index) => {
        //memotization
        if(index >= startTime.length) return 0;
        if (cache[index] != undefined) return cache[index];

        let notTaken = jobsSchedulingUtil(index + 1);
        let takenNextIndex = index + 1;

        while (takenNextIndex < jobs.length) {

            if (jobs[index][1] <= jobs[takenNextIndex][0]) break;
            takenNextIndex++;
        }

    
        cache[index] = Math.max(notTaken, jobs[index][2] + jobsSchedulingUtil(takenNextIndex));
        return cache[index];
    };

    return jobsSchedulingUtil(0);
};


