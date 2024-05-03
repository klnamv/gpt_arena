#include <iostream>
#include <stdlib.h>
using namespace std;
int main(){
    int n;
    cout<<"enter sizze array";
    cin>>n;
    int arr[n];
    cout<<"enter elements";
    for(int i=0;i<n;++i){
        cin>>arr[i];
    }
    int loc,temp;
    for(int i=1;i<n;i++){
        temp=arr[i];
        loc=i-1;
        while(loc>=0 && arr[loc]>temp)
        {
            arr[loc+1]=arr[loc];
            loc--;
        }
        arr[loc+1]=temp;
    }
        for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}