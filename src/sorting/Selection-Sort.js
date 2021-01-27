// Notes: In place sorting algorithm takes constant amount of extra memory

// Selection sort 
// Time complexity: O(n^2)
const selectionSort = (list) => {
    const length = list.length;
    for (let index = 0; index < length - 2; index++) {
        let iMin = index;
        for (let idx = index + 1; idx < length; idx++) {
            if (list[idx] < list[iMin]) {
                iMin = idx;
            }
        }
        let temp = list[index];
        list[index] = list[iMin];
        list[iMin] = temp;
    }
    return list;
}

selectionSort([2,7,4,1,5,3]) //  [1, 2, 3, 4, 5, 7]

