/*

    Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

    For example, given the following triangle

    [
         [2],
        [3,4],
       [6,5,7],
      [4,1,8,3]
    ]
    The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

    Note:

    Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
    //Initialize with array + 1 to avoid null checking with j + 1 later
    const mem = new Array(triangle.length + 1).fill(0);

    //Iterate through backwards from last to first row
    for (let i = triangle.length - 1; i >= 0; i--){
        //Starting with first item, set row counter to be the current value plus smallest candidate from previous row (j or j + 1)
        for (let j = 0; j < triangle[i].length; j++){
            mem[j] = Math.min(mem[j], mem[j + 1]) + triangle[i][j];
        }
    }

    //Returning the first element as there is only 1 starting element
    return mem[0];
};

console.log(minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
]));