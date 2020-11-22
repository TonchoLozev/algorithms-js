function isPalindrome(string) {
    string = string.toLowerCase();
    
    const charactersArr = string.split('');
    const validCharactersArr = 'abvdefghijklmnopqrstuvwxyz'.split('');
    const lettersArr = [];

    charactersArr.forEach(char => {
        if(validCharactersArr.indexOf(char) > -1){
            lettersArr.push(char);
        }
    });

    if(lettersArr.join('') === lettersArr.reverse().join('')){
        return true;
    }

    return false;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('yosuf'));
console.log(isPalindrome('mom'));

console.log(isPalindrome("Madam I'm Adam"));

