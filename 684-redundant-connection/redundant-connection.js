/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {

    let parents = [];
    parents[0] = -1;
    edges.forEach((edge) => {
        edge.forEach((node) => {
            console.log(node)
            parents[node] = node;
        })
    });
    let index = 0;
   
    const find = (node) => {

        if (parents[node] === node) return parents[node];
        else
            return find(parents[node]);
    }

    const union = (node1, node2) => {
        let parent1 = find(node1);
        let parent2 = find(node2);
        console.log('parent of ',node1,'is ',parent1);
        console.log('parent of ',node2,'is ',parent2);
        
        if (parent1 !== parent2) {
            parents[parent2] = parent1;
        }

    }

    index = 0;
    let result ;
    while(index < edges.length){

        let parent1 = find(edges[index][0]);
        let parent2 = find(edges[index][1]);
        console.log('parent1 ',parent1,'parent2',parent2);
        
        if(parent1 === parent2){
            result = edges[index];
        }else union(edges[index][0], edges[index][1]);
        index++;
    }   

    return result;

    };