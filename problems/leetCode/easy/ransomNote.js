/*
    Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

    Each letter in the magazine string can only be used once in your ransom note.

    Note:
    You may assume that both strings contain only lowercase letters.

    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {

    const map = {};

    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]] === undefined) map[magazine[i]] = 0;
        map[magazine[i]]++;
    }

    for (let j = 0; j < ransomNote.length; j++) {
       if (map[ransomNote[j]] > 0) {
           map[ransomNote[j]]--;
       } else {
           return false;
       }
    }

    return true;

};

console.log(canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh'));