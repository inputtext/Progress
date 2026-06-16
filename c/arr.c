#include<stdio.h>
#include<stdbool.h>

void sort (int arr[],int size){
    bool swapped ;

    for(int i =0; i<size -1;i++){
        for(int j =0;j<size-i-1;i++){
            if(arr[j]>arr[j+1]){
                int temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapped =true;
            }
        }
        if(swapped=false){
        break;
        }
    }
}

 
int main(){
    int arr[40];
    fgets(arr,sizeof(arr),stdin);
    int size =sizeof(arr)/sizeof(arr[0]);
    sort(arr,size);

}