
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    return noOFIslands(grid);   
   };
   
    
   /**
   Mark left,right,bottom,top
   **/
   function markCoOrdinate(map,x,y,currentIsland,coOrdinateMap){
         console.log(x,y);
       const coOrdinate=x+'-'+y;
   
    if(map[x][y]=="0")return;   
    if(coOrdinateMap[coOrdinate]==1)return;
       console.log(coOrdinate)
    coOrdinateMap[coOrdinate]=1;   
    //Mark top      
   if((x-1)>=0){
    markCoOrdinate(map,x-1,y,currentIsland,coOrdinateMap);  
   }
    //Mark bottom
   if((x+1)<map.length){
      markCoOrdinate(map,x+1,y,currentIsland,coOrdinateMap);  
  }
     //Mark left
   if((y-1)>=0){
      markCoOrdinate(map,x,y-1,currentIsland,coOrdinateMap);  
   }
     //Mark right
   if((y+1)<currentIsland.length){
     markCoOrdinate(map,x,y+1,currentIsland,coOrdinateMap);     
   }
   };
   
   function noOFIslands(map){
   let coOrdinateMap={};
   let x=0;
   let numerOfIslands=0;
   while(x<map.length){
       let y=0;
   
       while(y<map[x].length){
           let coOrdinate=x+'-'+y;
            if(map[x][y]!="0"&&coOrdinateMap[coOrdinate]===undefined)numerOfIslands++;
            markCoOrdinate(map,x,y,map[x],coOrdinateMap);
           console.log('all done');
           y++;
           
       }
       x++;
   }
    
   
   return numerOfIslands;
   }

  
