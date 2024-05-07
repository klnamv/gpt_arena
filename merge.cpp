#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int>& arr, int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    // Create temporary vectors
    vector<int> L(n1), R(n2);

    // Copy data to temporary vectors L[] and R[]
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temporary vectors back into arr[l..r]
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        // Find the middle point
        int m = l + (r - l) / 2;

        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}

vector<int> mergeAndSort(vector<int>& arr1, vector<int>& arr2) {
    vector<int> merged;
    // Merge arrays
    for (int num : arr1) {
        merged.push_back(num);
    }
    for (int num : arr2) {
        merged.push_back(num);
    }
    // Sort the merged array
    mergeSort(merged, 0, merged.size() - 1);
    return merged;
}

int main() {
    vector<int> array1 = {3, 5, 1, 9, 2};
    vector<int> array2 = {7, 4, 8, 6, 0};

    vector<int> result = mergeAndSort(array1, array2);

    cout << "Merged and sorted array: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
