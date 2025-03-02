var mincostTickets = function (days, costs) {
  //console.log(days,costs)
  let validiityCostMap = {}
  validiityCostMap[1] = costs[0]
  validiityCostMap[7] = costs[1]
  validiityCostMap[30] = costs[2]

  let passes = [1, 7, 30]

  let minCost = Number.MAX_SAFE_INTEGER
  let memory = []

  const mincostTicketsUtil = dayIndex => {
    if (dayIndex === days.length) return 0

    if (memory[dayIndex] !== undefined) return memory[dayIndex]

    const calculateNexDay = (validity, startIndex) => {
      while (startIndex < days.length && validity > days[startIndex]) {
        startIndex++
      }
      return startIndex;
    }

    let index = 0
    memory[dayIndex] = Number.MAX_SAFE_INTEGER;
    while (index < passes.length) {
      let nextDay = calculateNexDay(passes[index] + days[dayIndex], dayIndex);
      console.log(days[dayIndex], nextDay);

      memory[dayIndex] = Math.min(
        memory[dayIndex],
        mincostTicketsUtil(nextDay) + validiityCostMap[passes[index]]
      )

      index++
    }
   // console.log('final result',dayIndex,memory[dayIndex])
    return memory[dayIndex]
    /**
     *
     * memory[dayIndex] = min (
     * )
     *
     */
  }
  return mincostTicketsUtil(0);
}
