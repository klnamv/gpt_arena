#include <iostream>

using namespace std;

// Define the structure for a node in the linked list
struct Node {
    int data;
    Node* next;
};

// Function to append a new node at the end of the linked list
void append(Node* &head, int newData) {
    Node* newNode = new Node();
    newNode->data = newData;
    newNode->next = nullptr;

    if (head == nullptr) {
        head = newNode;
        return;
    }

    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Function to display all elements of the linked list
void display(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

// Function to add a new node at the beginning of the linked list
void addAtBeginning(Node* &head, int newData) {
    Node* newNode = new Node();
    newNode->data = newData;
    newNode->next = head;
    head = newNode;
}

// Function to add a new node at any specified position in the linked list
void addAnywhere(Node* &head, int position, int newData) {
    Node* newNode = new Node();
    newNode->data = newData;

    if (position == 0) {
        newNode->next = head;
        head = newNode;
        return;
    }

    Node* temp = head;
    for (int i = 0; i < position - 1; i++) {
        temp = temp->next;
    }
    newNode->next = temp->next;
    temp->next = newNode;
}

// Function to delete the first node from the linked list
void deleteAtBeginning(Node* &head) {
    if (head == nullptr) {
        return;
    }

    Node* temp = head;
    head = head->next;
    delete temp;
}

// Function to delete the last node from the linked list
void deleteAtEnd(Node* &head) {
    if (head == nullptr) {
        return;
    }

    if (head->next == nullptr) {
        delete head;
        head = nullptr;
        return;
    }

    Node* temp = head;
    while (temp->next->next != nullptr) {
        temp = temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
}

// Function to delete a node from any specified position in the linked list
void deleteAnywhere(Node* &head, int position) {
    if (head == nullptr) {
        return;
    }

    if (position == 0) {
        Node* temp = head;
        head = head->next;
        delete temp;
        return;
    }

    Node* temp = head;
    for (int i = 0; i < position - 1; i++) {
        temp = temp->next;
    }
    Node* nodeToDelete = temp->next;
    temp->next = temp->next->next;
    delete nodeToDelete;
}

// Main function to test the linked list operations
int main() {
    Node* head = nullptr;

    // Append
    append(head, 1);
    append(head, 2);
    append(head, 3);
    cout << "Linked list after appending: ";
    display(head);

    // Add at the Beginning
    addAtBeginning(head, 0);
    cout << "Linked list after adding at the beginning: ";
    display(head);

    // Add Anywhere
    addAnywhere(head, 2, 5); // Insert at position 2 (0-based indexing)
    cout << "Linked list after adding at position 2: ";
    display(head);

    // Delete at the Beginning
    deleteAtBeginning(head);
    cout << "Linked list after deleting at the beginning: ";
    display(head);

    // Delete at the End
    deleteAtEnd(head);
    cout << "Linked list after deleting at the end: ";
    display(head);

    // Delete Anywhere
    deleteAnywhere(head, 1); // Delete node at position 1 (0-based indexing)
    cout << "Linked list after deleting at position 1: ";
    display(head);

    return 0;
}
