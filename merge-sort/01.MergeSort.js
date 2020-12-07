function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }
    // take in a single, unsorted array as a parameter
    // split the array into two halves
    const middleIndex = Math.floor(array.length / 2);

    let arr1 = array.slice(0, middleIndex);
    let arr2 = array.slice(middleIndex, array.length);

    return merge(mergeSort(arr1), mergeSort(arr2));
}
 
function merge(array1, array2){
    // takes in two sorted arrays as parameters
    // merges those sorted arrays into one sorted array
    // returns one sorted array
    let result = [];
    while (array1.length && array2.length) {
        let minElem;
        if(array1[0] < array2[0]) {
            minElem = array1.shift();
        } else {
            minElem = array2.shift();
        }
        result.push(minElem);
    }

    if(array1.length) {
        result = result.concat(array1);
    } else if(array2.length) {
        result = result.concat(array2);
    }

    return result;
}

console.log(mergeSort([11, 7, 4, 1, 15, 12, 3]));
//[1, 3, 4, 7, 11, 12, 15]
console.log(mergeSort([100, -20, 40, -30, 16, -100, -101]));