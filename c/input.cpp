#include<iostream>
using namespace std;
int add(int a ,int b); //function declaration
int divide(int x ,int y);
int main(){
    int a =10;
    int b=20;
    int c =a+b;
    cout<<c<<endl;
    cout<< add(5,10)<<endl; //function invoking/calling
    cout<<divide(100,200);
    return 0 ;
};
int add(int a , int b){
    return a+b;
}
int divide(int x,int y){
    return x/y;
}


