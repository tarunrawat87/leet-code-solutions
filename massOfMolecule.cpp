#include<iostream>
#include<stdio.h>
using namespace std;

/*
This is a popular question.
It finds mass of molecules
Eg (CH2)O=44
The solution is based on recursion.
Question Link :https://www.spoj.com/problems/MMASS/
*/

//utility function :it is same as getMass but only diff is that
//it runs only upto next closing bracket
//for eg (CH2(CH))
//there will two recursive call to this function 
int getMassUTIL(char*,int*);

//get element mass
int getElementMass(char element){
if(element=='C')return 12;
if(element=='H')return 1;
if(element=='O')return 16;
return -1;
}
//to check if after bracket if we have a number
//eg CH2 so after H we have 2,so this function is used to find that after H we have 2
bool isNumeric(char c){
return c=='1'||c=='2'||c=='3'||c=='4'||c=='5'||c=='6'||c=='7'||c=='8'||c=='9';
}
//to check if within express,a index represents a element or not
bool isElement(char c){
return c=='C'||c=='O'||c=='H';
}
//if we have number,find its value
int getNumericValue(char c){
return c-48;//subrtracting it from 48 to get its value for eg '2' in ascii is 50 so 50 -48=2
}

//driver function
int getMass(char *express){
int index=0,tempMass,mass=0;
//runs through end of string
while(express[index]!='\0'){
//if we have '(' call the UTIL function
if(express[index]=='('){
index++;
tempMass=getMassUTIL(express,&index);
if(isNumeric(express[index+1])){//if after closing bracket we have number 
tempMass=getNumericValue(express[index+1])*tempMass;//multiply number to it
}
mass+=tempMass;
}else{

if(isElement(express[index])){//if we have an element in express
tempMass=getElementMass(express[index]);
if(isNumeric(express[index+1])){//if we have number after molecule
tempMass=getNumericValue(express[index+1])*tempMass;
}
mass+=tempMass;
}

}

index++;
}

return mass;
}

//util function doing the same thing
int getMassUTIL(char *express,int *index){

int tempMass,mass=0;

//printf("%c \n",express[*index]);

while(express[*index]!=')'){

if(express[*index]=='('){
(*index)++;
tempMass=getMassUTIL(express,index);
if(isNumeric(express[*index+1])){
tempMass=getNumericValue(express[*index+1])*tempMass;
}
mass+=tempMass;
}else{

if(isElement(express[*index])){
tempMass=getElementMass(express[*index]);
if(isNumeric(express[*index+1])){
tempMass=getNumericValue(express[*index+1])*tempMass;
}
mass+=tempMass;
}

}

(*index)++;
//printf("%c ",express[*index]);
}


return mass;
}


int main(){

char express[101];
scanf("%s",express);

printf("%d ",getMass(express));

/*
Core Logic:

1. Iterate through string till '\0'
2. If you have '(' recursive call the  UTIL function(it will return you the mass) 
 2.1 after closing bracket check for number ,if there multipy given mass to it
 2.3 add mass to final mass
else
2.4 if you have element ,find mass of it
2.5 find the number presense of element,if there multiply it to it


*/
return 0;
}