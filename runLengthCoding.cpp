/*

Question Link:https://practice.geeksforgeeks.org/problems/run-length-encoding/1
Desc:
input:aaabc
output:a3b1c1

*/
#include <bits/stdc++.h>
using namespace std;
char *encode(char *src);    
 
int main() {
	
	int T;
	cin>>T;
	while(T--)
	{
		char str[10000];
		cin>>str;
		
		cout<<encode(str)<<endl;
	}
	return 0;
}


/*Please note that it's Function problem i.e.
you need to write your solution in the form of Function(s) only.
Driver Code to call/invoke your function is mentioned above.*/

/*You are required to complete this function */
void makeResultString(string *resultString,int count,char c);

//this function will return next index for count character 
int findNextIndex(char *teststring,string *result,int index,int length){
    
char character=teststring[index];
int count=0;
//this loop returns count of same character and breaks when char doesnt match anymore
while(index<length){
    
if(character==teststring[index])count++;
else
break;
    
index++;    
}
//make resultant string out of char and count
makeResultString(result,count,character);    
    
return index;    
}
//this will make resultant string
void makeResultString(string *resultString,int count,char c){

stringstream stream;
//cout<<c<<count<<endl;
stream<<c;
stream<<count;
//cout<<stream.str()<<endl;
resultString->append(stream.str());
    
}


char *encode(char *src)
{     
//logic is count char of each character and push it result string with its count 
 int length=strlen(src);
 int index=0;
 string result;
 while(index<length){
     
     index=findNextIndex(src,&result,index,length);
     
     
//index++;     
 }
 
 //cout<<result;
//since it return const char *,typecasting it
 char *x=(char*)result.c_str();
 return x;
  //Your code here 
}     
 
