function reverseArrayInPlace(arr) {
    arr.forEach((element, index) => {
        if(index > arr.length / 2) return;

        const currentEement = element;

        arr[index] = arr[arr.length - index - 1];
        arr[arr.length - index - 1] = currentEement;
   });
   return arr;
}

console.log(reverseArrayInPlace(['5', '6', '7']))
