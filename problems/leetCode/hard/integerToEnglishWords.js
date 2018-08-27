/*
    Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

    Example 1:

    Input: 123
    Output: "One Hundred Twenty Three"
    Example 2:

    Input: 12345
    Output: "Twelve Thousand Three Hundred Forty Five"
    Example 3:

    Input: 1234567
    Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
    Example 4:

    Input: 1234567891
    Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function(num) {
    if (num === 0) return 'Zero';

    const SUB_TWENTY = {
        0: '',
        1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
        6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
        11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen',
        16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen',

    };

    const TENS = {
        2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty',
        6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety'
    };

    const HUNDRED = 'Hundred';
    const THOUSAND = 'Thousand';
    const MILLION = 'Million';
    const BILLION = 'Billion';

    function parseDoubles(num) {
        const one = Math.floor((num / 1) % 10);
        const two = Math.floor((num / 10) % 10);
        if (num >= 0 && num < 20) {
            return SUB_TWENTY[num];
        } else if (num >= 20 && num <= 99) {
            if (!SUB_TWENTY[one]) return TENS[two];
            else return TENS[two] + ' ' + SUB_TWENTY[one];
        }
    }

    const res = [];

    const one = Math.floor(num % 10);
    const two = Math.floor((num / 10) % 10);
    const three = Math.floor((num / 100) % 10);
    const four = Math.floor((num / 1000) % 10);
    const five = Math.floor((num / 10000) % 10);
    const six = Math.floor((num / 100000) % 10);
    const seven = Math.floor((num / 1000000) % 10);
    const eight = Math.floor((num / 10000000) % 10);
    const nine = Math.floor((num / 100000000) % 10);
    const ten = Math.floor((num / 1000000000) % 10);

    //For each triple blocks
    //You need very minimally the unit designator, e.g.: hundred, million, billion
    //The double counts
    //The hundreds place, which is a singular number

    if (ten) res.push(SUB_TWENTY[ten]);
    if (ten) res.push(BILLION);

    if (nine) res.push(SUB_TWENTY[nine]);
    if (nine) res.push(HUNDRED);
    if (eight || seven) res.push(parseDoubles(parseInt(parseInt(' ' + eight + seven))));
    if (seven || eight || nine) res.push(MILLION);

    if (six) res.push(SUB_TWENTY[six]);
    if (six) res.push(HUNDRED);
    if (five || four) res.push(parseDoubles(parseInt(parseInt(' ' + five + four))));
    if (four || five || six) res.push(THOUSAND);

    if (three) res.push(SUB_TWENTY[three]);
    if (three) res.push(HUNDRED);
    if (two || one) res.push(parseDoubles(parseInt(' ' + two + one)));

    return res.join(' ');

};

console.log(numberToWords(5));
console.log(numberToWords(170));
console.log(numberToWords(165));
console.log(numberToWords(19));
console.log(numberToWords(25));
console.log(numberToWords(150));
console.log(numberToWords(120));
console.log(numberToWords(121));
console.log(numberToWords(1000));
console.log(numberToWords(1209));
console.log(numberToWords(10));
console.log(numberToWords(100));
console.log(numberToWords(1000));
console.log(numberToWords(10000));  //ten thousand
console.log(numberToWords(100000)); //one hundred thousand
console.log(numberToWords(1000000)); //one million
console.log(numberToWords(10000000)); //ten million
console.log(numberToWords(100000000)); //one hundred million
console.log(numberToWords(1000000000)); //one billion

console.log(numberToWords(1000010)); //one million ten