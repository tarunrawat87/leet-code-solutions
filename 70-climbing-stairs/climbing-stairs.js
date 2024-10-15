/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let memory = [];

    function climbing(n) {

        if (n < 0) return 0;
        if (n === 0) return 1;

        if (memory[n] !== undefined) return memory[n];

        memory[n] = climbing(n-1) + climbing(n-2);

        return memory[n];
    }

    const result = climbing(n);

return result;

};