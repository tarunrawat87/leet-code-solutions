/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

  const map = tasks.reduce((obj, ele) => {
      if (obj[ele] === undefined) obj[ele] = {count:1,index:-1};
      else
          obj[ele].count++;

     
      return obj;
  }, {})
  console.log(map)
  let indexTracker = {};

  const getNextTask = (index) => {
      let maxTask = 0, task;
      for (let element in map) {
          if (map[element].count >= maxTask && (map[element].index === -1 || ((index - map[element].index) > n))) {
              task = element;
              maxTask = map[element].count;
          }
      }
      if (maxTask >= 1) {
          map[task].count--;
          map[task].index = index;

          if(map[task].count === 0) delete map[task];

          return task;
      } else return -1;

  }

  let index = 0;
  let sequence = [];

  
  while(true){

     if(Object.keys(map).length === 0) return sequence.length; 

     let nextTask = getNextTask(index++);
     //console.log(nextTask,map)
     sequence.push(nextTask);
      
  }

  
};