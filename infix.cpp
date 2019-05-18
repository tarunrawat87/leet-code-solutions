  #include<iostream>
#include<stdio.h>
#include<stack>
using namespace std;

bool isOperator(char c){
return c=='+'||c=='-'||c=='^'||c=='/'||c=='*';
}

bool isOperand(char c){
return isOperator(c)==false;
}


int getPrecedence(char c){
int value;

switch(c){
case '+':value=1;break;
case '-':value=1;break;
case '/':value=2;break;
case '^':value=2;break;
case '*':value=2;break;
}
return value;
}


int main(){

stack<char> Stack;
string infixExp;
int i=0;
char infix[100];
scanf("%s",infix);
char c,op;
while(infix[i]!='\0'){
c=infix[i];
i++;

if(c=='('){
Stack.push(c);
continue;
}

if(c==')'){

while(1){
if(Stack.empty())break;
c=Stack.top();
Stack.pop();

if(c=='(')break;

infixExp.push_back(c);
}
//a+b*c(c^d-e)^(f+g*h)-i
continue;
}

if(isOperand(c)){
infixExp.push_back(c);
continue;
}
if(isOperator(c)){

if(Stack.empty()){
Stack.push(c);
continue;
}
op=Stack.top();

if(op=='('){
Stack.push(c);
 continue;
}

if(getPrecedence(c)>getPrecedence(op)){
Stack.push(c);
 continue;
}else{


while(1){
if(Stack.empty()){
break;
}
op=Stack.top();

if(op=='(')break;

if(getPrecedence(c)>getPrecedence(op)){
break;
}
Stack.pop();
infixExp.push_back(op);
}
Stack.push(c);
}


}

}

while(!Stack.empty()){
c=Stack.top();
infixExp.push_back(c);
Stack.pop();
}

cout<<infixExp<<endl;


return 0;
}