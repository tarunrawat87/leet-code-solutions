#include<iostream>
#include<stdio.h>
#include<string.h>
using namespace std;

/*
This is not a geeksforgeeks question but is Codechef question
Link:https://www.codechef.com/problems/CAKEDOOM
This is one of the intersting question and will be interesting to solve it.
You will need to cover a lot of corner cases



*/
//this will check for equality for characters adjacent to it
bool checkForEquality(char *string,int index,int size){
int left=index-1;//left char
int right=index+1;//right char

if(size==1)return false;//if size is one ,return false

//if index is 0
if(left<0){
if(string[index]==string[right]&&string[index]!='?')return true;
}
//if index is size-1
if(right==size){
if(string[index]==string[left]&&string[index]!='?')return true;
}
//if size is greater than 2
if(string[index]==string[left]&&string[left]!='?')return true;
if(string[index]==string[right]&&string[right]!='?')return true;

return false;
}

//find next character for ?
char findNumber(char *string,int index,int size,int limit){
int leftIndex=index-1;
int rightIndex=index+1;

if(size==1)return '0';//if size is 1,then 0 will be next char;

char upperBound='0'+(limit-1);//limit means what is limit of K
//finding next char when index is 0
if(leftIndex<0){
char K='0';
while(K<=upperBound){
if(string[rightIndex]!=K&&K!=string[size-1])return K;
K++;
}
return -1;
}


if(rightIndex==size){//finding next char when index is size-1
char K='0';
while(K<=upperBound){
if(string[leftIndex]!=K&&K!=string[0])return K;
K++;
}
return -1;
}

char K='0';
while(K<=upperBound){
if(string[leftIndex]!=K&&string[rightIndex]!=K)return K;
K++;
}



return -1;
}

int main(){
int testcase;
scanf("%d",&testcase);

while(testcase--){
int K;
scanf("%d",&K);
char string[101];
scanf("%s",string);
int index=0;
int size=strlen(string);

//if K==2,then its a "SPECIAL" case
if(K==2){
//if size is 1,and it is '?',only possibility is '0'
if(size==1){
if(string[0]=='?'){
string[0]='0';
printf("%s\n",string);
}else{
printf("%s\n",string);
}

continue;
}

//size is odd and K=1 then it will end and start with same char voilation the rule
if(size%2==1){
printf("NO\n");
continue;
}
int index=0;
bool isInvalid=false;


//we will find first index which is not '?'
while(string[index++]=='?');
index--;
if(index%2==0){
//if index is even then first char decision
if(string[index]=='1')string[0]='1';
else
string[0]='0';
}else{//if index is odd then first char decision
if(string[index]=='1')string[0]='0';
else
string[0]='1';
}

index=0;
isInvalid=false;

if(size>1&&string[0]==string[size-1]&&string[0]!='?'){
printf("NO\n");
continue;
}



while(index<size){
if(checkForEquality(string,index,size)){
printf("NO\n");
isInvalid=true;
break;
}
if(string[index]=='?'){
char c=findNumber(string,index,size,K);
if(c==-1){
printf("NO\n");
isInvalid=true;
break;
}
string[index]=c;
}

index++;
}
if(!isInvalid)printf("%s\n",string);
 
continue;
}


if(size>1&&string[0]==string[size-1]&&string[0]!='?'){
printf("NO\n");
continue;
}
bool invalid=false;
//normal case when k>2
while(index<size){
//check if adjacent char is equal ,is yes print no
if(checkForEquality(string,index,size)){
printf("NO\n");
invalid=true;
break;
}


//find suitable char for index
if(string[index]=='?'){
char c=findNumber(string,index,size,K);
if(c==-1){
printf("NO\n");
invalid=true;
break;
}
string[index]=c;
}

index++;
}
if(invalid){
continue;
}

printf("%s\n",string);

}











return 0;
}