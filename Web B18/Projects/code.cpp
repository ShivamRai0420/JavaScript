#include<iostream>
using namespace std;
int main(){
    // cout<<"hello guddu\n";
    // return 0;
    int n;
    cin >>n;

    int row =  1;

    // while (i<=n)
    // {
    //     int j =1;
    //     while (j<=n)
    //     {
    //         cout<<j+0;
    //         j =j +1;
    //     }
    //     cout<<endl;
    //     i = i +1;
        
    // }
    
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
        {
            cout<<"*";
            col = col + 1;
        }
        cout<<endl;
        row = row + 1;
        
    }
    



}