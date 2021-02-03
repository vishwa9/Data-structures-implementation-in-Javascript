// Analysis
// 1. Divide and Conquer
// 2. Recursive
// 3. Not stable(in a stable algorithm relative order of elements having same key is preserved)
// Time complexity O(n^2) in worst case and O(nLogn) in average case
// space complexity average case O(logn) worst case n 

function quickSort(list, start = 0, end=list.length-1) {
    if (start < end) {
        let pIndex = partition(list, start, end); // call partition or randomizedPartition for better time complexity
        quickSort(list, start, pIndex-1);
        quickSort(list, pIndex+1, end);
    }
    return list;
}

function partition(list, start, end) {
    let pivot = list[end];
    let pIndex = start;  // set partition index as start initially
    for (let index = start; index < end; index++) {
        if (list[index] <= pivot) {
            [list[pIndex], list[index]] = [list[index], list[pIndex]]; // swap if element is lesser than pivot
            pIndex++;
        }
    }
    [list[end], list[pIndex]] = [list[pIndex], list[end]]; // swap pivot with element at partition index
    return pIndex++;
}

function randomizedPartition(list, start, end) {
    let pivotIndex = Math.floor(Math.random() * Math.floor(list.length));
    [list[pivotIndex], list[end]] = [list[end], list[pivotIndex]];
    return partition(list, start, end);
}
quickSort([7,6,5,4,3,2,1,0]); // [0, 1, 2, 3, 4, 5, 6, 7]