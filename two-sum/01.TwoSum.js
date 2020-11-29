//mine implementation
// function twoSum(numArray, sum) {
//     const resultArray = [];
//     const hashedNums = {};

//     numArray.forEach((element) => {
//         if(!hashedNums[element]) {
//             hashedNums[element] = 0;
//         }
//         hashedNums[element]++;
//     });

//     for (let num in hashedNums) {
//         const result = sum - num;

//         if(hashedNums[result] && (hashedNums[result] > 0 || hashedNums[num] > 0)){
//             resultArray.push([num, result]);
//             hashedNums[result]--;
//             hashedNums[num]--;
//         }
//     }

//     return resultArray;
// }

function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];
   
    for (var i = 0; i < numArray.length; i++) {
      var currNum = numArray[i];
      var counterpart = sum - currNum;
      if (hashTable.indexOf(counterpart) !== -1) {
        pairs.push([ currNum, counterpart ]);
      }
      hashTable.push(currNum);
    }
    
    return pairs;
  }

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));