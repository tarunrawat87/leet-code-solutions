/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class PriorityQ {
        constructor(size) {
            this.arr = [];
        }
        isEmpty() {
            return this.arr.length === 0;
        }
        addToQueue(ele) {
            this.arr.push(ele);
            this.heapifyAdd(this.arr.length - 1, ele);
        }

        popFromQueue() {
            this.arr.swap(0, this.arr.length - 1);
            let poppedElement = this.arr.pop();
            this.heapifyRemove(0);
            return poppedElement;
        }

        heapifyAdd(i, ele) {

            let parent = Math.floor((i - 1) / 2);
            if (parent >= 0 && this.arr[parent].distance >= ele.distance) {
                this.arr.swap(parent, i);
                if (parent !== 0)
                    this.heapifyAdd(parent, ele);
            }
        }

        heapifyRemove(i) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < this.arr.length && this.arr[left].distance <= this.arr[i].distance) {
                i = left;
            }
            if (right < this.arr.length && this.arr[right].distance <= this.arr[i].distance) {
                i = right;
            }
            if (smallest !== i) {
                this.arr.swap(i, smallest);
                this.heapifyRemove(i);
            }
        }
}

 Array.prototype.swap = function (i, j) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
}

Array.prototype.isEmpty = function () {
        return this.length === 0;
}


var networkDelayTime = function(times, n, k) {

 let graph = times.reduce((currMap, ele) => {

        if (currMap[ele[0] - 1] === undefined) {
            currMap[ele[0] - 1] = [];
        }
        if (currMap[ele[1] -1] === undefined) {
            currMap[ele[1] - 1] = [];
        }
        currMap[ele[0] - 1].push({
            src: ele[1] -1 ,
            distance: ele[2]
        })
        return currMap;

    }, {})

   let totalNoOfNodes = Object.keys(graph).length;

   if(totalNoOfNodes !== (n)) return -1;



  let distance = [];
  let visitedMap = [];
  let result = [];

  for (let x in graph) {
        distance[x] = Number.MAX_SAFE_INTEGER;
        visitedMap[x] = false;
  }
 let src = k - 1;
 let q = new PriorityQ();
  q.addToQueue({ src , distance: 0 });
  distance[src] = 0;
 let distanceSoFar = 0;
  while (!q.isEmpty()) {
    
        let node = q.popFromQueue();
        let adjacentNodes = 0;
        distanceSoFar = node.distance;
       if(visitedMap[node.src] === true) continue; 
        
    //    if(node.src !== src && distanceSoFar <= threshold)
    //    result.push(node.src);        
        visitedMap[node.src] = true;  
     
        
        while (adjacentNodes < graph[node.src].length ) {          
            let adjacentNode = graph[node.src][adjacentNodes];
            
            if (!visitedMap[adjacentNode.src]) {
                let distanceFromOrigin = adjacentNode.distance + distanceSoFar;
                if(distance[adjacentNode.src] >distanceFromOrigin ){
                 distance[adjacentNode.src] = distanceFromOrigin;
                 q.addToQueue({ src: adjacentNode.src, distance: distanceFromOrigin });
                }
            }

            adjacentNodes++;
        }

 
   }

 
  


let index = 0;
let maxDistance = Number.MIN_SAFE_INTEGER;

while(index < distance.length){
    if(distance[index] === Number.MAX_SAFE_INTEGER) return -1;
    else 
    maxDistance = Math.max(maxDistance,distance[index] );
    index++;
}
return maxDistance;
}