#include<stdio.h>
typedef struct {
    int length ;
    int breadth ;
}rect;
int main(){
    rect a1 = {1,9};
    printf("%d\n",a1.length);
    printf("%d\n",a1.breadth);
    int result  = a1.length*a1.breadth;
    printf("%d\n",result);

}
