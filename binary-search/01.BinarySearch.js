function binarySearch(numArray, key) {
    const midIndex = Math.floor(numArray.length / 2);
    const midElement = numArray[midIndex];

    if(key === midElement) {
        return true;
    } else if(midElement < key && numArray.length > 1) {
        return binarySearch(numArray.splice(midIndex, numArray.length), key);
    } else if(midElement > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, midIndex), key);
    } else {
        return false;
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 1));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 7));