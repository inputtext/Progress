#include<stdio.h>
int main (){
    int p=10;
    int *q=&p;
    int *s=q;
   /*  s=20;//variable s =20 */
    *s=20;
    printf("%d",p);
}
