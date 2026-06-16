#include<stdio.h>
int main(){
    int temp=0;
    while (temp<100){
        temp+=1;
        if(temp==100){
            temp=0;
        }
    }
}