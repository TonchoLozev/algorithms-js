function getMean(arr) {
    return arr.reduce((curr, next) => curr + next, 0) / arr.length;
}

function getMedian(arr) {
    let median;

    arr.sort((a, b) => a - b);

    if(arr.length % 2 !== 0){
        median = arr[Math.floor(arr.length / 2)]
    } else {
        const mid1 = arr[(arr.length / 2) - 1];
        const mid2 = arr[arr.length / 2]

        median = (mid1 + mid2) / 2
    }

    return median
}

function getMode(arr) {
    const valuesAndDuplicates = {};
    let mostCommonValue = [];
    let maxFrequency = 0;
    
    arr.forEach(element => {
        if(!valuesAndDuplicates[element]) {
            valuesAndDuplicates[element] = 0;
        }
        valuesAndDuplicates[element]++;
    });
    

    for(let currentVal in valuesAndDuplicates) {
        if(valuesAndDuplicates[currentVal] > maxFrequency) {
            maxFrequency = valuesAndDuplicates[currentVal];
            mostCommonValue = [ currentVal ];
        } else if (valuesAndDuplicates[currentVal] === maxFrequency) {
            mostCommonValue.push(currentVal);
        }
    }

    if(mostCommonValue.length === Object.keys(valuesAndDuplicates).length) {
        return [];
    }

    return mostCommonValue;
}

function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr),
    }
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));

