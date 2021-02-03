// Memory consumed n
// Time complexity O(nlogn)
function mergeSort(sequence) {
    var merge = (sequence, left, middle, right) => {
        let i = left;
        let j = middle;
        let result = [];

        while (i < middle && j < right) {
            if (sequence[i] < sequence[j]) {
                result.push(sequence[i]);
                i++;
            } else {
                result.push(sequence[j]);
                j++;
            }
        }
        while (i < middle) {
            result.push(sequence[i]);
            i++;
        }
        while (j < right) {
            result.push(sequence[j]);
            j++;
        }
        for (i = left; i < right; i++) {
            sequence[i] = result[i - left];
        }
    }

    var split = (sequence, left, right) => {
        let middle = Math.floor((right-left)/2 + left);

        if((right-left) < 2) return;
        split(sequence, left, middle);
        split(sequence, middle, right);
        merge(sequence, left, middle, right);
    }
    split(sequence, 0, sequence.length);

    return sequence;
}