function fibMemo(index, cache = []) {
    if(cache[index]) {
        return cache[index];
    } else {
        if(index < 3) {
            return 1;
        } else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }

    return cache[index];
}

console.log(fibMemo(4));
console.log(fibMemo(9));
console.log(fibMemo(8));
console.log(fibMemo(50));
console.log(fibMemo(1000));