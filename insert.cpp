#include <iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter no of elements in array";
    cin>>n;
    int arr[n];
    cout<<"enter no. in array";
    for(int i=0;i<n;++i){
    cin>>arr[i];
    }
    
    int element;
    cout<<"enter element";
    cin>>element;
    
    int position;
    cout<<"enter position";
    cin>>position;
    
        for(int i = n-1;i>=position;i--)
        {
        arr[i+1]=arr[i];
        }
    
    arr[position] = element;

    n++;
    cout << "Updated array after insertion: ";
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    
    return 0;

    
}