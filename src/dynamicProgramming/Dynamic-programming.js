// recursive starategy
//fibonacci normal 
// time complexity O(n^2)
// space complexity O(n) 
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// fibonacci with memoization
// time complexity O(n)
// space complexity O(n)
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

// grid traveler
const gridTraveler = (m, n) => {
    if (m ==1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
}

// grid traveller with memoization
const gridTraveler = (m,n, memo = {}) => {
     const key = m + ',' + n;
     if (key in memo) return memo[key];
     if (m == 1 && n == 1) return 1;
     if (m == 0 || n == 0) return 0;
     memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
     return memo[key];
}

/*
grid [[s,0,0]
    [0,0,0]
    [0,0,e]]
*/

/* time complexity of above
    brute force             memoized
    O(2^n+m) time   -->     O(m*n) time
    O(n+m) space            O(n+m) space
*/

// can Sum
const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return true;
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}
canSum(7, [2,3]);

/* time complexity of above
    brute force             memoized
    O(n^m) time   -->     O(m*n) time
    O(m) space            O(m) space
*/

// how sum
const howSum = (targetSum, numbers) => {
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult != null) {
            return [...remainderResult, num];
        }
    }
    return null;
}

// how sum with memoization
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult != null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

/*
    m = target sum
    n = numbers.length
    Brute Force             Memoized
    time: O(n^m*m)          time: O(n*m^2)
    space: O(m)             spaceO(m^2)
*/


const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = bestSum(remainder, numbers);
        if (remainderResult !== null) {
            let combination = [...remainderResult, num];
            if (shortestCombination === null || shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

const bestSumMemoized = (targetSum, numbers, memo= {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderResult = bestSumMemoized(remainder, numbers, memo);
        if (remainderResult !== null) {
            let combination = [...remainderResult, num];
            if (shortestCombination === null || shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

bestSum(7, [5,3,4,7]);
bestSum(8, [1,4,4,5]);
bestSum(100, [1,2,5,25]);

/**
 * m = target sum
 * n = numbers.length
 * Brute force             Memoized
 * time O(n^m*m)           time O(n*m^2)
 * space O(m^2)            space O(m^2)
 */


const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); // true

/**
 * m = target.length
 * n = wordBank.length
 * Brute Force           Memoized
 * time O(n^m*m)         time O(n*m^2)
 * space O(m^2)          space O(m^2)
 */

 const countConstruct = (target, wordBank, memo = {}) => {
     if (target in memo) return memo[target];
     if (target === '') return 1;
     let totalCount = 0;

     for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let numberOfWays = countConstruct(suffix, wordBank, memo);
            totalCount += numberOfWays;
        }
     }
     memo[target] = totalCount;
     return totalCount;
 }

 countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);

 /**
 * m = target.length
 * n = wordBank.length
 * Brute Force           Memoized
 * time O(n^m*m)         time O(n*m^2)
 * space O(m^2)          space O(m^2)
 */


 const allConstruct = (target, wordBank, memo = {}) => {
     if (target in memo) return memo[target];
     if (target === '') return [[]];
     const result = [];

     for (let word of wordBank) {
         if (target.indexOf(word) === 0) {
             const suffix = target.slice(word.length);
             const suffixWays = allConstruct(suffix, wordBank, memo);
             const targetWays = suffixWays.map(way => [word, ...way]);
             result.push(...targetWays);
         }
     }
     memo[target] = result;
     return result;
 }

  /**
 * m = target.length
 * n = wordBank.length
 * Brute Force           
 * time O(n^m)         
 * space O(m)          
 */

 // Tabulation Strategy

 const fib = (n) => {
     const table = Array(n+1).fill(0);
     table[1] = 1;
     for (let i = 0; i <= n; i ++) {
         table[i+1] += table[i];
         table[i+2] += table[i];
     }
     return table[n];
 }

 const gridTraveler = (m,n) => {
    const table = Array(m+1)
    .fill()
    .map(() => Array(n+1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    return table[m][n];
 }

 gridTraveler(3,3) // 6

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                if (i+num <= targetSum) table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

canSum(7, [5,3,4]);

const howSum = (targetSum, numbers) => {
    let table = Array(targetSum+1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i+num <= targetSum) table[i+num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];
}
howSum(8, [2,3,5]); //[2, 2, 2, 2]
howSum(7, [5,3,4, 7]); //[4, 3]
/**
 * m = target sum        O(m^2*n) time
 * n = numbers.length    O(m^2) space
 */

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                if(!table[i + num] || table[i+num].length > combination.length) {
                    table[i+num] = combination;
                }
            }
        }
    }
    return table[targetSum];
}

/**
 * same as above
 */

bestSum(100, [1,2,5,25]); // [25,25,25,25]
bestSum(8, [1,4,5]); // [4,4]

const canConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(false);
    table[0] = true;
    
    for(let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (target.slice(i, i+word.length) === word) {
                    table[i+word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); // true
canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); // false

/**
 * m = target           O(m^2*n) time
 * n = wordbank.length  O(m)     space
 */

const countConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
}

countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']); //2
countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); // 1
countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); // 0

/**
 * complexity same as above
 */

const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i+word.length].push(...newCombinations); 
            }
        }
    }
    return table[target.length];
}

allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']); 
/**
 * [["purp","le"],["p","ur","p","le"]]
 */
allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']);
/**
 * ["abc", "def"]
 * ["ab", "c", "def"]
 * ["abcd", "ef"]
 * ["ab", "cd", "ef"]
 */
/**
 * m = target.length    ~O(n^m) time
 * n = wordBank.length  ~O(n^m) space
 */

