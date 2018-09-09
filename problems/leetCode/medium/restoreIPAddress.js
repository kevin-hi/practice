/*
    Given a string containing only digits, restore it by returning all possible valid IP address combinations.

    Example:

    Input: "25525511135"
    Output: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
    const res = [];
    dfs([], 0);
    return res;

    function dfs(prefix, index) {
        //If prefix is greater than 4 AND total index is the same as string's length
        if (prefix.length === 4 && index === s.length) {
            res.push(prefix.join('.'));
            return;
        }

        //If prefix reached the length of 4 OR index is the end, return out
        if (prefix.length === 4 || index === s.length) return;


        //Loop through all length of the string with incrementing index
        for (let i = index; i < s.length; i++) {
            //If first index is equal to 0, return out, as 0 is not a valid group starting point
            if (i !== index && s[index] === '0') return;
            //Parse out current starting and end starting + 1
            const num = parseInt(s.slice(index, i + 1));

            //If current number is greater than 255 return out
            if (num > 255) return;

            //All valid, push into prefix array
            prefix.push(num);

            //DFS with existing prefix and increment index
            dfs(prefix, i + 1);

            prefix.pop();
        }
    }

};

console.log(restoreIpAddresses('25525511135'));