#include<stdio.h>
int main(){

/*     int a =10;
    int b =20;

    int temp =a;
    a=b;
    b=temp; */

    int a ,b;

    printf("enter a numnber a : ");
    scanf("%d",&a);
    
    printf("enter a numnber b: ");
    scanf("%d",&b);

    if(a==b ){ /* condition , both shoulnt be same  */
        printf("enter diff number ");

    }
    else{
        printf("the value nbefore swapping is  \n:");
        printf("\nthe value of a = %d",a);
        printf("\nthe value of b = %d",b);


        int temp =a;
        a=b;
        b=temp;
    
        printf("the value after swapping is  \n:");
        printf("\nthe value of a = %d",a);
        printf("\nthe value of b = %d",b);

    }




}