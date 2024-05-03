#include  <iostream>
using namespace std;

int fibonacci(int n)
{
    if (n<=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);

}
void fibonacci_series(int count)
{
    for (int i=0;i<count;i++)
    {
      cout<<fibonacci(i);   
    }
}
    
    int main(){
     fibonacci_series(4);
        return 0;
    }


