/*
    Given a non-empty array of integers, return the k most frequent elements.

    For example,
    Given [1,1,1,2,2,3] and k = 2, return [1,2].

    Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//     const buckets = {};
//     const res = [];
//
//     function sort(a) {
//         const arr = Object.keys(a);
//         for (let i = 1; i < arr.length; i++) {
//             for (let j = i; j > 0 && (a[arr[j]] && a[arr[j]].length) < (a[arr[j - 1]] && a[arr[j - 1]].length); j--) {
//                 const prev = a[arr[j]];
//                 a[arr[j]] = a[arr[j - 1]];
//                 a[arr[j - 1]] = prev;
//             }
//         }
//         return a;
//     }
//
//     for (let i = 0; i < nums.length; i++) {;
//         if (typeof buckets[nums[i]] !== 'undefined') buckets[nums[i]].push(nums[i]);
//         else buckets[nums[i]] = [nums[i]]
//     }
//
//     sort(buckets);
//     const keys = Object.keys(buckets);
//     for (let m = 0; m < k; m++) res.push(buckets[keys[keys.length - 1 - m]][0]);
//
//     return res;
// };

const topKFrequent = (nums, k) => {
    const map = {};
    const result = [];
    //Maximum bucket size is the maximum nums size,
    //This is the worst case scenario where all nums are the same, thus its occurrence is the total length of num
    const bucket = Array.apply(null, new Array(nums.length + 1)).map(() => []);

    //Create a mapping of each unique element and its occurrence
    for (let num of nums) map[num] = ~~map[num] + 1;

    //Create a bucket of each unique element and their occurrence rate
    for (let num in map) bucket[map[num]].push(parseInt(num));

    for (let i = nums.length; i >= 0 && k > 0; k--) {
        while (bucket[i].length === 0) i--;
        result.push(bucket[i].shift());
    }

    return result;
};

//console.log(topKFrequent([1,1,1,2,2,3], 2));

// console.log(topKFrequent([3,3,1,1,1,5,2], 2));
console.log(topKFrequent([5,3,1,1,1,3,73,1], 2));
// console.log(topKFrequent([4,1,-1,2,-1,2,3, 8], 2));

