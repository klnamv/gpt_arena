#include <iostream>
#include <stdlib.h>
using namespace std;

#define MAX_SIZE 100

int stack[MAX_SIZE];
int top = -1;

void push(int element) {
    if (top == MAX_SIZE - 1) {
        cout << "Stack Overflow!" << endl;
        return;
    }
    stack[++top] = element;
}

int pop() {
    if (top == -1) {
        cout << "Stack Underflow!" << endl;
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top == -1) {
        cout << "Stack is empty!" << endl;
        return -1;
    }
    return stack[top];
}

void traverse() {
    if (top == -1) {
        cout << "Stack is empty!" << endl;
        return;
    }
    cout << "Stack elements: ";
    for (int i = 0; i <= top; i++) {
        cout << stack[i] << " ";
    }
    cout << endl;
}

int main() {
    int choice, element;
    while (true) {
        cout << "\n1. Push";
        cout << "\n2. Pop";
        cout << "\n3. Peek";
        cout << "\n4. Traverse";
        cout << "\n0. Exit";
        cout << "\nSelect any choice: ";
        cin >> choice;

        switch (choice) {
            case 0:
                exit(0);
            case 1:
                cout << "Enter element to push: ";
                cin >> element;
                push(element);
                break;
            case 2:
                element = pop();
                if (element != -1)
                    cout << element << " is popped." << endl;
                break;
            case 3:
                element = peek();
                if (element != -1)
                    cout << "Top element is: " << element << endl;
                break;
            case 4:
                traverse();
                break;
            default:
                cout << "Invalid choice!" << endl;
                break;
        }
    }
    return 0;
}
