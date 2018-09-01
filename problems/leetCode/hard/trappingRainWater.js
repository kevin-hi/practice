/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


    The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

    Example:

    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
    let totalWater = 0;

    let start = 0;
    let end = 0;

    for (let i = 0; i < height.length; i++) {
        //Start parsing first eligible candidate, if n + 1 is greater than n
        if (height[i] > height[i + 1]) {
            start = i;
            end = i + 1;
            for (let j = i + 1; j < height.length; j++) {
                //Continue to run through the end and find the eligible end
                //Eligible end is an end that is greater or equal to start or the largest until the end
                //Be sure to set next starting index to be the new ned
                if (height[j] >= height[start]) {
                    end = j;
                    i = end - 1;
                    break;
                } else {
                    end = height[end] > height[j] ? end : j;
                    i = end - 1;
                }
            }

            //After finding eligible end, run through the segments and calculate water value
            for (let k = start; k < end; k++) {
                const diff = Math.min(height[start], height[end]) - height[k];
                if (diff > 0) totalWater += diff;
            }
        }
    }


    return totalWater;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([2,0,2]));
// console.log(trap([4,2,3]));
console.log(trap([4,2,0,3,2,5]));
console.log(trap([5,4,1,2]));