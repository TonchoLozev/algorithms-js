function partition(array, start, end) {
    const pivot = array[end];
    let i = start -1;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;
    let temp = array[i];
    array[i] = array[end];
    array[end] =temp;

    return i;
}

function quickSort(array, start, end) {
    if (end <= start) return; //base case

    let pivot = partition(array, start, end);
    //left partition
    quickSort(array, start, pivot - 1);
    //right partition
    quickSort(array, pivot + 1, end);
}

let arr = [ 10, 7, 8, 9, 1, 5 ];
let start = 0;
let end = arr.length - 1;

quickSort(arr, start, end);

console.log(arr)
