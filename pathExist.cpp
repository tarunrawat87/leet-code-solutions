/*This Question is to see whether path exist btwn two vertices or not
Solution uses BFS approch to solve the problem
Question Link: https://practice.geeksforgeeks.org/problems/find-whether-path-exist/0
*/

#include<iostream>
//#include<pair>
#include<queue>
#include<stdio.h>
using namespace std;


bool isValidVertice(int x,int y,int size){

if(x<0||x>=size)return false;
if(y<0||y>=size)return false;

return true;
}

int main()
 {
 int testcase;
 scanf("%d",&testcase);
 
 
 while(testcase--){
 int size;
 scanf("%d",&size);
 int map[size][size];
 int i=0,j=0;
queue<pair<int,int> > bfs;
bool visited[size][size]; 
 while(i<size){
    j=0;
    while(j<size){
        scanf("%d",&map[i][j]);
if(map[i][j]==1){
bfs.push(make_pair(i,j));
}
visited[i][j]=false;
    j++;    
    }
     
     
i++;     
 }
int x,y;     
pair<int,int> vertice;
bool pathExist=false;

while(!bfs.empty()){
vertice=bfs.front();
bfs.pop();
x=vertice.first;
y=vertice.second;
//marking visted
visited[x][y]=true;

if(map[x][y]==2){
pathExist=true;
break;
}

if(isValidVertice(x+1,y,size)&&(!visited[x+1][y])&&(map[x+1][y]==3||map[x+1][y]==2)){
bfs.push(make_pair(x+1,y));
}
if(isValidVertice(x,y+1,size)&&(!visited[x][y+1])&&(map[x][y+1]==3||map[x][y+1]==2)){
bfs.push(make_pair(x,y+1));

}
if(isValidVertice(x-1,y,size)&&(!visited[x-1][y])&&(map[x-1][y]==3||map[x-1][y]==2)){
bfs.push(make_pair(x-1,y));

}
if(isValidVertice(x,y-1,size)&&(!visited[x][y-1])&&(map[x][y-1]==3||map[x][y-1]==2)){
bfs.push(make_pair(x,y-1));

}


}


if(pathExist)printf("%d\n",1);
else
printf("%d\n",0);


     
     
     
 }
	//code
	return 0;
}
