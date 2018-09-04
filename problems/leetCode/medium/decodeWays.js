/*
    A message containing letters from A-Z is being encoded to numbers using the following mapping:

    'A' -> 1
    'B' -> 2
    ...
    'Z' -> 26
    Given a non-empty string containing only digits, determine the total number of ways to decode it.

    Example 1:

    Input: "12"
    Output: 2
    Explanation: It could be decoded as "AB" (1 2) or "L" (12).
    Example 2:

    Input: "226"
    Output: 3
    Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 */

/**
 * @param {string} s
 * @return {number}
 */
const numDecodingsDP_Two = function(s) {
    if(s === null || !s.length) return 0;
    //Array to keep max amount of ways each digit can be encoded
    const mem = new Array(s.length + 1).fill(0);

    mem[0] = 1;
    //1st digit is 1 as long as its not '0'
    mem[1] = s[0] !== '0' ? 1 : 0;

    for (let i = 2; i <= s.length; i++) {
        console.log(`current mem is ${mem[i]} current string item is: ${s[i - 1]}`);
        const single = Number(s[i - 1]);
        const double = Number(s[i - 2] + s[i - 1]);
        console.log(mem);

        if (single > 0) {
            console.log(`single adding ${mem[i - 1]} to ${mem[i]}`);
            mem[i] += mem[i - 1];
        }

        if (double > 9 && double <= 26) {
            console.log(`double adding ${mem[i - 2]} to ${mem[i]}`);
            mem[i] += mem[i - 2];
        }
    }

    console.log(`\nfinal:`);
    console.log(mem);
    return mem[s.length];
};

const numDecodingsDP = s => {
    let mem = new Array(s.length + 1).fill(0);
    mem[s.length] = 1;

    for (let i = s.length - 1; i >=  0; i--) {
        const single = Number(s[i]);
        const double = Number(s[i] + s[i + 1]);

        if (i === s.length - 1) {
            mem[i] = single > 0 ? 1: 0;
            continue;
        }

        //Single number
        if (single > 0) mem[i] += mem[i + 1];

        //Double number
        if (double >= 10 && double <= 26) mem[i] += mem[i + 2];
    }

    return mem[0];
};

const numDecodings = s => {
    let i;
    let cur = 0;
    let prev = 1;
    let prev2 = 0;

    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            cur = 0;
        } else {
            cur = prev;
            if (parseInt(s[i] + s[i + 1]) <= 26) cur += prev2;
        }
        prev2 = prev;
        prev = cur;
    }
    return cur;
};




//console.log(numDecodings('226'));
// console.log(numDecodingsDP_Two('10'));

console.log(numDecodingsDP_Two('226'));