#include<stdio.h>
typedef struct {
    int roll_no;
    char name [20];
} students;
int main(){

    students std1 ={60,"Raj"};

    students stdinfo[5]={std1};
    for(int i=0;i<5;i++){
        printf("Student roll number is : %d\t",stdinfo[i].roll_no);
        printf("Student Name is %s\t",stdinfo[i].name);
        printf("\n");
    };
    return 0 ;
    /* printf("%d\n",std1.roll_no);
    printf("%s",std1.name); */
}