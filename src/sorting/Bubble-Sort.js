// Bubble sort 
// Time complexity: O(n^2)

const bubbleSort = (list) => {
    const len = list.length;
    for (let k = 1; k < len; k++) {
        let flag = false;
        for (let i = 0; i < len-k; i++) {
            if (list[i] > list[i+1]) {
                let temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return list;
}

bubbleSort([6,5,4,1,2,3]) //(6) [1, 2, 3, 4, 5, 6]