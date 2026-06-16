#include<stdio.h>
void main(){
    hi();
    greet("pk");
    punish("piyushh");
};
void hi(){
    printf("hii\n");
};
void greet(char name[20]){
    printf("hello  %s\n",name);
}
void punish(char name[20]){
    printf("you are punished :%s\n",name);
}
