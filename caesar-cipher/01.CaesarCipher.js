function caesarCipher(str, num){
    if(!str) return null;
    if(!num) return str;

    const alphabet = 'abvdefghijklmnopqrstuvwxyz';
    const strToLowersCase = str.toLowerCase();

    let generatedString = '';

    strToLowersCase.split('').forEach((char, index) => {
        const charIndex = alphabet.indexOf(char) + Math.abs(num);
        if(char === ' ') {
            generatedString += ' ';
        } else {
            if(str[index] === str[index].toUpperCase()){
                generatedString += alphabet[charIndex % alphabet.length].toUpperCase();
            } else {
                generatedString += alphabet[charIndex % alphabet.length];
            }
        }
    });

    return generatedString;
}

console.log(caesarCipher('zoo keeper', 2));
console.log(caesarCipher('Boo keePer', -2));
