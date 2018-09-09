/*

    Given a collection of distinct integers, return all possible permutations.

    Example:

    Input: [1,2,3]
    Output:
    [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const results = [];
    const stack = [];

    const permutations = (remaining) => {
        console.log('Permutation function call with ');
        console.log(remaining);
        if (remaining.length === 0) {
            console.log('Triggering length check');
            console.log(stack);
            console.log(`\n`);
        }

        if (remaining.length === 0) results.push(stack.slice());

        //Looping through remaining items
        for (let i = 0; i < remaining.length; i++) {
            // Insert element onto the end of current
            console.log(`pushing ${remaining[i]}`);
            stack.push(remaining[i]);
            //Recurse with inserted element removed, creating shallow copy and combining front of array with back
            permutations(remaining.slice(0, i).concat(remaining.slice(i + 1)));

            // Remove last inserted element for next iteration
            const poped = stack.pop();
            console.log(`popping out ${poped}`);
        }

    };

    permutations(nums);

    return results;
};

console.log(permute([1, 2, 3]));