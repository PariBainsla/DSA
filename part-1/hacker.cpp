#include <iostream>
// #include <iomanip>
// #include <limits>

// using namespace std;

// int main() {
//     int i = 4;
//     double d = 4.0;
//     string s = "HackerRank ";
    
//     int i2;
//     double d2;
//     string s2;
    
//     cin>>i2;
//     cin>>d2;
//     cin.ignore();
//     getline(cin,s2);

// cout<<i+i2<<endl;
// cout<<fixed<<setprecision(1)<<d+d2<<endl;
// cout<<s+s2<<endl;

    
    
    // Declare second integer, double, and String variables.
    
    // Read and save an integer, double, and String to your variables.
    // Note: If you have trouble reading the entire string, please go back and review the Tutorial closely.
    
    // Print the sum of both integer variables on a new line.
    
    // Print the sum of the double variables on a new line.
    
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.

    // return 0;}


    //QUESTION

    void solve(double meal_cost, int tip_percent, int tax_percent) {
    // Calculate tip and tax
    double tip = meal_cost * tip_percent / 100.0;
    double tax = meal_cost * tax_percent / 100.0;

    // Total cost
    double total_cost = meal_cost + tip + tax;

    // Print rounded total cost
    cout << round(total_cost) << endl;
}