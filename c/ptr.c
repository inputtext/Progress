#include<stdio.h>
int main(){
    int a =10;
    int* p=&a;

    printf("%d\n",&a);// add of a
    printf("%d\n",p);/*  address of a */
    printf("%d\n",*p);//10
    *p = 100;// dereferencing :  changing the value of the var using a ptr pointing to that var
    printf("%d\n",*p); //100
    printf("%d\n",a); // value of a becomes 100

    int b = 20 ;
    int *q=&b;//q=>b
    *q =200; // q=b=200
    printf("%d\n",b);

}
