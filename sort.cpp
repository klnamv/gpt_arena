// #include <iostream>
// #include <stdlib.h>
// using namespace std;

// int main() {
//     int n;
//     cout << "Enter the number of elements in array: ";
//     cin >> n;

//     int arr[n];
//     cout << "Enter the numbers in the array: ";
//     for (int i = 0; i < n; ++i) {
//         cin >> arr[i];
//     }

//     int temp;
//     for (int i = 0; i < n - 1; ++i) {
//         for (int j = 0; j < n - 1 - i; ++j) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     cout << "Array after sorting: ";
//     for (int i = 0; i < n; ++i) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;

//     return 0;
// }
#include <iostream>
#include <stdlib.h>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of elements in array: ";
    cin >> n;

    int arr[n];
    cout << "Enter the numbers in the array: ";
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }
    int key;
    cin>>key;
    int flag=1;
    for (int i = 0;i<n;++i){
        if(key==arr[i])
        {
            flag=1;
            break;
        }
    }
    if(flag==1)
    {
        cout<<"search is successful";
    }else{
        cout<<"search is not succesfull";
    }
}
// oygps8965g
