var maxEvents = function (events) {
  Array.prototype.swap = function (i, j) {
    let temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }

  events.sort((a, b) => {
    if (a[0] < b[0]) return -1

    if (a[0] === b[0]) {
      if (a[1] < b[1]) return -1
      else return 1
    }

    return 1
  })

  class PQ {
    constructor () {
      this.arr = []
      this.compare = function (first, second) {}
    }
    getSize () {
      return this.arr.length
    }
    getPeakElement () {
      return this.arr[0]
    }
    isQueueEmpty () {
      return this.arr.length === 0
    }
    addToQueue (ele) {
      this.arr.push(ele)
      this.heapifyAdd(this.arr.length - 1)
    }
    removeFromQueue () {
      this.arr.swap(0, this.arr.length - 1)
      let element = this.arr.pop()
      this.heapifyRemove(0)
      return element
    }

    heapifyAdd (index) {
      let parent = Math.floor((index - 1) / 2)
      if (parent >= 0 && this.arr[index][1] <= this.arr[parent][1]) {
        this.arr.swap(index, parent)
        this.heapifyAdd(parent)
      }
    }
    heapifyRemove (index) {
      let left = 2 * index + 1
      let right = 2 * index + 2

      let smallest = index
      if (left < this.arr.length && this.arr[left][1] <= this.arr[smallest][1])
        smallest = left
      if (
        right < this.arr.length &&
        this.arr[right][1] <= this.arr[smallest][1]
      )
        smallest = right

      if (smallest !== index) {
        this.arr.swap(smallest, index)
        this.heapifyRemove(smallest)
      }
    }
  }

  let pq = new PQ()

    let max = 0

  events.forEach(ele => {
    max = Math.max(max, ele[1])
  })
  
  function addEventToQueue(day){

    
  }

  let dayIndex = 0;
  let index = 1;
  let day = 0;
  while (index <= max) {
    
    while(dayIndex < events.length){
        if(events[dayIndex][0] > index) break;
        pq.addToQueue(events[dayIndex++]);
    }
    if(pq.getSize() > 0){
        pq.removeFromQueue();
        day++;
    }
   
    while(!pq.isQueueEmpty()){
        if(pq.getPeakElement()[1] <= index) pq.removeFromQueue();
        else break;
    }

    index++
  }

  return day
}