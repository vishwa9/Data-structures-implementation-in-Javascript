function rabinKarpSearch(pattern, text, num) {
    const d = 256;
    const m = pattern.length;
    const n = text.length;
    let i,j = 0;
    let p = 0; // hash value of pattern
    let t = 0; // hash value of text
    let h = 1;
    
    // The value of h would be Math.pow()
    h = Math.pow(d, m-1) % num;
    
    // calculate hash value of pattern and first window of text
    for (i = 0; i < m; i++) {
        p = (d*p + pattern[i].charCodeAt()) % num;
        t = (d*t + text[i].charCodeAt()) % num;
    }
    
    // slide the pattern over text one by one
    for (i = 0; i <= (n-m); i++) {
        
        // check the hash values of current window of text and pattern. If the hash values match then only check for pattern
        if (p === t) {
            if (pattern === text.substring(i,m+i)) {
                console.log(`Pattern found at ${i}`);
            }
        }
        // calculate hash value of next window of text: Remove trailing and add trailing digit
        if (i < (n-m)) {
            t = (d*(t - text[i].charCodeAt()*h) + text[i+m].charCodeAt()) % num;
            if (t < 0) {
                t = t + num;
            }
        }
    }
}
