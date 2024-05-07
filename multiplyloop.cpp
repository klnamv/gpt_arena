#include  <iostream>
using namespace std;
 int multiply(int n){
     if(n==1)
         return 1;
    else
         return n * multiply(n-1);
 }
 int main() {
     int k;
     cin>>k;
    cout<<"multiply"<<multiply(k);
    return 0;
}