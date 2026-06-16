    %:include<stdio.h>
    int main()<%
        char a<:3:> = "BOB\n";
        printf("%s",a);

        /* octal of 8 is 10 but its writeen as 010 */
        int x =010;
        if(x==8){
            printf("true\n");
        }
        else{
            printf("false");
        }

        /* ptrs */
        int z =10;
        int* y=&z;/* hold the address of the var z  */
        int c=*y;/* prints value which array ispointing*/
        printf("\n%d",c);


        /* deferencing of array using ptrs */
        int arr[3];
        *arr=1; /* indexing of array ysing ptrs */
        *(arr+1)=2; /* sytax ==  *(arr +index)  */
        *(arr+2)=3;
        printf("\n%d",2[arr]);/*  arr[2]=2[arr]  since *(arr+index)=*(index +arr)*/
        for(int i=0;i<3;i++){
            printf("\n%d",arr[i]);
        }


    %>