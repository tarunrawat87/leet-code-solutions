#include<iostream>
#include<stdio.h>

/*
Question Link :https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0
Question: Sort array of 0,1 and 2
*/


using namespace std;

int main(){
int testcase;
scanf("%d",&testcase);

while(testcase--){
int size;
scanf("%d",&size);
int array[size];
int index=0;
while(index<size)scanf("%d",&array[index++]);
index=0;
int zeroIndex=0,twoIndex=size-1;
;

while(index<size){

if(index>twoIndex)break;

if(array[index]==0||array[index]==2){

if(array[index]==0){
swap(array[index],array[zeroIndex]);
zeroIndex++;
}
if(array[index]==2){
swap(array[index],array[twoIndex]);
twoIndex--;
}


if(array[index]==0&&index>zeroIndex)continue;
if(array[index]==2&&index<twoIndex)continue;
index++;
}else{
index++;
}
}


index=0;
while(index<size)printf("%d ",array[index++]);
puts("");
}



return 0;
}