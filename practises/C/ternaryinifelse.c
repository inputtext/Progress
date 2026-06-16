#include<stdio.h>
int main(){
    int a, b ;

    printf("enter number a : ");
    scanf("%d",&a);

    printf("enter number b : ");
    scanf("%d",&b);

    /* ternary operator */
    ( a>=b ) ? printf("%d  is greater ",a) : printf("%d is greater" ,b);

}