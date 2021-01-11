// sum(1)(2)(3)......(n)

const sum = a => b => b ? sum(a+b) : a;

// debouncing
let counter = 0;
const getData = (...args) => {
    // calls an api and gets data

    console.log('Fetching Data..', ...args, counter++);
}

const debounce = function (fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(context, args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 3000);

// throttling
const loggingFunc = () => console.log('logged...');

function throttle(fn, delay) {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

const enhancedLoggingFunc = throttle(loggingFunc, 3000);

window.addEventListener('resize', enhancedLoggingFunc);

// polyfill for bind method

Function.prototype.myBind = function(...args) {
    let context = this;
    return function (...args2) {
        return context.apply(args[0], [...args.slice(1), ...args2]);
    }
}
