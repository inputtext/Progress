#include<stdio.h>
int main(){
    float  a ,b, c;
    printf("enetr your marks in maths : ");
    scanf("%f",&a);
    printf("enter your marks in phy :");
    scanf("%f",&b);

    printf("your marks in maths are %.2f : ",a);
    printf("your marks in phy are  %.2f :",b);

    c=(a+b)/3;

    if(c>=60){
        printf("you are passed !");
    }
    else{
        printf("failed");
    }

}