//Arrays
//cognitive class .ai
// #include <iostream>
// using namespace std;
// int main()
// {
//     int n,arr[100],sum=0;
//     cout<<"\n Enter array size: ";
//     cin>>n;
//     for (int i=0; i<n; ++i)
//     {
//         cin>>arr[i];
//         sum=sum+arr[i];
//     }
//     cout<<"\n sum =" <<sum;
// }

// #include <iostream>
// using namespace std;
// int main ()
// {
// int arr[1]={2};
// cout<<0[arr];
// return 0;       
// }
// #include <iostream>
// using namespace std;

// int main() {
//     int size;
//     cout << "Enter the size of the array: ";
//     cin >> size;
//     int arr[size];
//     cout << "Enter " << size << " numbers: ";
//     for (int k = 0; k < size; ++k) {
//         cin >> arr[k];
//     }

//     int i,j;
//     for(i=0;j=i+1;++i)
//     {
//         if(arr[i]>arr[j])
//         {
//             cout<<arr[j];
//             i++;
//         }
//     }
// }
    
#include <iostream>
using namespace std;
int main ()
{
    int sem;
    cout<<"enter number of sem";
    cin>>sem;
    int arr[sem];
    int subj[sem];

    for(int i=0;i<sem;++i)
    {
        cout<<"enter no subjects"<<i+1;
        cin>>subj[i];

    }    
    
    for (int i=0;i<sem;++i)
    {
        int marks[subj[i]];
    
    for(int j=0; j < subj[i];++j)
    {
        cout<<"enter marks in  subjects"<<i+1;
        cin>>marks[j];
    }
    }

  std::cout<<"sem"<<arr[sem];
    for(int i=0;i<sem;++i)
    {
    cout<<"no. of sub in "<<sem<< "are"<<subj[i];
    }
    for(int i=0;i<sem;++i)
    {
    cout<<"no. of marks in "<<subj[i]<< "are"<<marks[subj[i]];
    }    
}