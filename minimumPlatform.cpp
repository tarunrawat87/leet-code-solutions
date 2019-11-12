#include<iostream>
#include<stdio.h>
#include<string.h>
#include<sstream>
using namespace std;

int convertTime(char *start,char *end){
string time_str(start,end);
stringstream str_stream(time_str);
int time;
str_stream>>time;
return time;
}

bool sortFunc(pair<pair< int, int> ,pair<int ,int> > train1,pair<pair<int, int> ,pair<int ,int> > train2){
if(train1.first.first==train2.first.first){
return train1.first.second>train2.first.second;
}else{
return train1.first.first>train2.first.first;
}

}

bool statitionIsEmpty(){



}


int main(){

int testcase;
scanf("%d",&testcase);
while(testcase--){
int size;
scanf("%d",&size);
int index=0;
vector< pair<int, int> ,pair<int ,int> > trains;

while(index<size){
pair<int, int> ,pair<int ,int> > train;
char time[5];
scanf("%s",time);
train.first.first=convert(time,time+2);//pass hr here
train.first.second=convert(time+2,time+4);//pass Min here
trains.push_back(train);
index++;
}
index=0;
pair<int, int> ,pair<int ,int>::iterator i;

for(i=trains.begin();i!=trains.end();i++){
char time[5];
scanf("%s",time);
i->second.first=convert(time,time+2);//pass hr here
i->second.second=convert(time+2,time+4);//pass Min here
}

//sort your trains vector here
sort(trains.begin(),trains.end(),sortFunc);
vector<pair<int ,int>> trains_at_pltfrms;

index=0;
while(index<size){

if(statitionIsEmpty(trains[index],trains_at_pltfrms)){

}else{

}

index++;
}

return 0;
}