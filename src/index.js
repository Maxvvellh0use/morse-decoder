const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrCodeLetters = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        arrCodeLetters.push(expr.slice(i, i + 10));
    }
    arrCodeLetters.map(function (elem, index) {
        if (elem === '**********') {
            arrCodeLetters.splice(index, 1, ' ')
        }
    });
    let result = '';
    const morseMap = arrCodeLetters.map(function (elem) {
        return elem.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
    });
    const preResultMap = morseMap.map(elem => result + MORSE_TABLE[elem]);
    for (let i = 0; i < preResultMap.length; i++) {
        if (preResultMap[i] === 'undefined') {
            preResultMap[i] = ' '
        }
    }
    return preResultMap.join('')
}
module.exports = {
    decode
};