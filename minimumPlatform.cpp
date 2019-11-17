#include<iostream>
#include<stdio.h>
#include<string.h>
#include<sstream>
#include<vector>
#include <bits/stdc++.h> 
#include<list>
using namespace std;

/*
question link : https://practice.geeksforgeeks.org/problems/minimum-platforms/0



*/

int convert(char *start,char *end){
string time_str(start,end);
stringstream str_stream(time_str);
int time;
str_stream>>time;
return time;
}

bool leftStation(pair<int ,int> trainAtPltfrm,pair<pair< int, int> ,pair<int ,int> >  inComingTrain){
//printf("incoming train :%d %d pltfrm train %d %d\n",inComingTrain.first.first,inComingTrain.first.second,trainAtPltfrm.first,trainAtPltfrm.second);
if(inComingTrain.first.first>trainAtPltfrm.first)return true;
if(trainAtPltfrm.first>inComingTrain.first.first){
return false;
}else{
if(trainAtPltfrm.first==inComingTrain.first.first){
return trainAtPltfrm.second<inComingTrain.first.second;
}else{
return false;
}

}
if(trainAtPltfrm.first>inComingTrain.first.first&&trainAtPltfrm.second>inComingTrain.first.second)return false;


return true;
}


bool sortFunc(pair<pair< int, int> ,pair<int ,int> > train1,pair<pair<int, int> ,pair<int ,int> > train2){
if(train1.first.first==train2.first.first){
return train1.first.second<train2.first.second;
}else{
return train1.first.first<train2.first.first;
}}

bool statitionIsEmpty(pair<pair< int, int> ,pair<int ,int> >  train,list<pair<int ,int> > *trains_at_ptlfm){

if(trains_at_ptlfm->empty()){
trains_at_ptlfm->push_back(make_pair(train.second.first,train.second.second));
return false;
}

int index=0;
list<pair<int ,int> > ::iterator i;

for(i=trains_at_ptlfm->begin();i!=trains_at_ptlfm->end();i++){

if(leftStation(*i,train)){
trains_at_ptlfm->erase(i);
trains_at_ptlfm->push_back(make_pair(train.second.first,train.second.second));
return true;
}

}
trains_at_ptlfm->push_back(make_pair(train.second.first,train.second.second));
return false;
}

int main(){

int testcase;
scanf("%d",&testcase);
while(testcase--){
int size;
scanf("%d",&size);
int index=0;
vector< pair<pair<int, int> ,pair<int ,int> > > trains;

while(index<size){
pair<pair<int, int> ,pair<int ,int> > train;
char time[5];
scanf("%s",time);
train.first.first=convert(time,time+2);//pass hr here
train.first.second=convert(time+2,time+4);//pass Min here
trains.push_back(train);
index++;
}
index=0;

vector< pair< pair<int, int>,pair<int,int> > >::iterator i;

for(i=trains.begin();i!=trains.end();i++){
char time[5];
scanf("%s",time);
i->second.first=convert(time,time+2);//pass hr here
i->second.second=convert(time+2,time+4);//pass Min here
}

//sort your trains vector here
sort(trains.begin(),trains.end(),sortFunc);

list<pair<int ,int> > trains_at_pltfrms;
int stations=0;
index=0;
while(index<size){

if(statitionIsEmpty(trains[index],&trains_at_pltfrms)){
//trains_at_pltfrms.add();
}else{
stations++;
}

index++;
}
printf("%d\n",stations);
}
return 0;
}