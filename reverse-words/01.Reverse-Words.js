function reverseWords(string) {
    const wordsArray = string.split(' ');

    wordsArray.forEach((word, index) => {
        const wordCharsArray = word.split('');
        let reversedWord = '';

        for(let i = wordCharsArray.length - 1; i > -1; i--){
            reversedWord += wordCharsArray[i];
        }
        wordsArray[index] = reversedWord;
    });

    return wordsArray.join(' ');
}

console.log(reverseWords('this is a string of words'));
console.log(reverseWords('Coding js'));
