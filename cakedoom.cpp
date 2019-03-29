#include<iostream>
#include<stdio.h>
#include<string.h>
using namespace std;

bool checkForEquality(char *string,int index,int size){
int left=index-1;
int right=index+1;

if(size==1)return false;

if(left<0){
if(string[index]==string[right]&&string[index]!='?')return true;
}
if(right==size){
if(string[index]==string[left]&&string[index]!='?')return true;
}

if(string[index]==string[left]&&string[left]!='?')return true;
if(string[index]==string[right]&&string[right]!='?')return true;

return false;
}


char findNumber(char *string,int index,int size,int limit){
int leftIndex=index-1;
int rightIndex=index+1;

if(size==1)return '0';

char upperBound='0'+(limit-1);
if(leftIndex<0){
char K='0';
while(K<=upperBound){
if(string[rightIndex]!=K&&K!=string[size-1])return K;
K++;
}
return -1;
}


if(rightIndex==size){
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


if(K==2){

if(size==1){
if(string[0]=='?'){
string[0]='0';
printf("%s\n",string);
}else{
printf("%s\n",string);
}

continue;
}


if(size%2==1){
printf("NO\n");
continue;
}
int index=0;
bool isInvalid=false;



while(string[index++]=='?');
index--;
if(index%2==0){

if(string[index]=='1')string[0]='1';
else
string[0]='0';
}else{
if(string[index]=='1')string[0]='0';
else
string[0]='1';
}

index=0;
isInvalid=false;

if(string[0]==string[size-1]&&string[0]!='?'){
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


if(string[0]==string[size-1]&&string[0]!='?'){
printf("NO\n");
continue;
}
bool invalid=false;
while(index<size){

if(checkForEquality(string,index,size)){
printf("NO\n");
invalid=true;
break;
}



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