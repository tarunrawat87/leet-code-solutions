#include<iostream>
#include<stdio.h>
#include<map>
#include<set>
using namespace std;

void removeCustomer(map<int,int> *Map,set<int> *currentCustomer){

map<int,int>::iterator i;
i=Map->begin();
int minVal=i->second;
int minIndex=i->first;

while(i!=Map->end()){
if(i->second<minVal){
minIndex=i->first;
}
i++;
}

//printf("removing %d..\n",minIndex);
Map->erase(minIndex);
currentCustomer->erase(minIndex);

}


void updateOrderList(map<int,int> *Map,int customer){

(*Map)[customer]--;

}


void prepareMap(map<int,int> *Map,int *array,int size){
int index=0;

while(index<size){

if(Map->find(array[index])==Map->end()){
(*Map)[array[index]]=1;
}else{
(*Map)[array[index]]++;
}

index++;
}


}

int main(){

int testcase;
scanf("%d",&testcase);


while(testcase--){
int size;
int totalAvail;
scanf("%d %d",&totalAvail,&size);
int index=0;
int array[size];
while(index<size)scanf("%d",&array[index++]);
map<int,int> Map;
prepareMap(&Map,array,size);
set<int> currentCustomer;
int efforts=0;
index=0;
while(index<size){

if(totalAvail>0){

if(currentCustomer.find(array[index])==currentCustomer.end()){
currentCustomer.insert(array[index]);
efforts++;
totalAvail--;
updateOrderList(&Map,array[index]);
}else{
updateOrderList(&Map,array[index]);
}}else{


if(currentCustomer.find(array[index])==currentCustomer.end()){
removeCustomer(&Map,&currentCustomer);

currentCustomer.insert(array[index]);

efforts++;
updateOrderList(&Map,array[index]);
}else{
updateOrderList(&Map,array[index]);
}

}

index++;
}


printf("%d\n",efforts);


}



return 0;
}