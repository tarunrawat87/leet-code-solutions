#include<iostream>
#include<stdio.h>
#include<vector>
#include <bits/stdc++.h> 
#include<math.h>
using namespace std;


bool customSort(pair <int ,pair<int,int> > first,pair <int ,pair<int,int> > second){

return first.first>second.first;
}



int main(){
int size;
int x;
int y;
scanf("%d %d %d",&size,&x,&y);
int array1[size];
int array2[size];
vector<pair<int,pair<int,int > > > orders;
int index=0;
while(index<size)scanf("%d",&array1[index++]);
index=0;
while(index<size)scanf("%d",&array2[index++]);
index=0;
while(index<size){
int diff1=abs(array1[index]-array2[index]);

orders.push_back(make_pair(diff1,make_pair(array1[index],array2[index])));

index++;
}

sort(orders.begin(),orders.end(),customSort);
vector<pair<int,pair<int,int > > >::iterator i;

i=orders.begin();
int sum=0;
while(i!=orders.end()){

int xVal=i->second.first;
int yVal=i->second.second;

//printf("%d %d ",xVal,yVal);

if((xVal>yVal)&&(x--)){
sum+=xVal;
}
if((xVal<yVal)&&(y--)){
sum+=yVal;
}

if(xVal==yVal){
sum+=xVal;

if(x)x--;
else
y--;
}
//printf("%d is sum\n",sum);

i++;
}

printf("%d\n",sum);
return 0;
}