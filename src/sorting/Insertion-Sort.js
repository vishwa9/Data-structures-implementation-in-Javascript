// In place constant memory
// Time complexity O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        hole = i;
        while(hole > 0 &&  arr[hole-1] > value) {
            arr[hole] = arr[hole-1];
            hole--;
        }
        arr[hole] = value;
    }
    return arr;
}

insertionSort([7,2,4,1,5,3]); // [1, 2, 3, 4, 5, 7]