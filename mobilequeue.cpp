#include <iostream>
#include <queue>
#include <stack>
#include <string>

using namespace std;

int main() {
    queue<string> mobile_queue;
    stack<string> mobile_stack;

    // Adding mobile numbers to the queue
    mobile_queue.push("1234567890");
    mobile_queue.push("9876543210");
    mobile_queue.push("5554443332");
    mobile_queue.push("9998887776");
    mobile_queue.push("1112223334");
    mobile_queue.push("4445556668");
    mobile_queue.push("7778889990");

    // Removing mobile numbers from the queue one by one and adding them to the stack
    while (!mobile_queue.empty()) {
        string removed_mobile = mobile_queue.front();
        mobile_queue.pop();
        mobile_stack.push(removed_mobile);
        cout << "Removed from queue: " << removed_mobile << endl;
        cout << "Current stack: ";
        stack<string> temp_stack = mobile_stack;
        while (!temp_stack.empty()) {
            cout << temp_stack.top() << " ";
            temp_stack.pop();
        }
        cout << endl;
    }

    cout << "Final stack: ";
    while (!mobile_stack.empty()) {
        cout << mobile_stack.top() << " ";
        mobile_stack.pop();
    }
    cout << endl;

    return 0;
}
