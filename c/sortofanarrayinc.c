#include<stdio.h>
#include<stdbool.h>

void sort (int arr[],int size){
    bool swapped ;
    for(int i=0;i<size-1;i++){
        swapped =false;
        for(int j =0 ;j<size -i -1;j++){ // j<6 -0-1 =j=5  j<6-1-1 =j=4with 1 
            if( arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1]=temp;

                swapped =true ;

            }
        }
        if(swapped ==false){
            break;
        }
    }

}


void print(int arr[] , int size){
    for(int i =0 ;i<size ; i++){
        printf("%d",arr[i]);
    }
}
int main(){
    int array[]={15,6,33,44,22,34,5897897,65,9387};
    int size = sizeof(array) / sizeof(array[0]);
    sort(array, size);
    print(array,size);    


}