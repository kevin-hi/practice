/*
    We are given an elevation map, heights[i] representing the height of the terrain at that index. The width at each index is 1. After V units of water fall at index K, how much water is at each index?

    Water first drops at index K and rests on top of the highest terrain or water at that index. Then, it flows according to the following rules:

    If the droplet would eventually fall by moving left, then move left.
    Otherwise, if the droplet would eventually fall by moving right, then move right.
    Otherwise, rise at it's current position.
    Here, "eventually fall" means that the droplet will eventually be at a lower level if it moves in that direction. Also, "level" means the height of the terrain plus any water in that column.
    We can assume there's infinitely high terrain on the two sides out of bounds of the array. Also, there could not be partial water being spread out evenly on more than 1 grid block - each unit of water has to be in exactly one block.
 */

/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
const pourWater = function(heights, V, K) {

    while(V-- > 0) {

        let current = K;
        //Move left if we are greater than 0
        //Our next left item is smaller or equal to current
        while(current > 0 && heights[current] >= heights[current - 1]) current--;

        //Move right if we are less than 0
        //Our next right item is smaller or equal to current
        while(current < heights.length - 1 && heights[current] >= heights[current + 1]) current++;

        //Move left to K
        //Our current item is to the left of K and our current water is greater or equal to the next left
        while(current > K && heights[current] >= heights[current - 1]) current--;

        heights[current]++;
    }

    return heights;
};

const pourWater2nd = (heights, V, K) => {

    while (V > 0) {
        let idx = K;
        for(let i = K; i >=0; i--) {
            if (heights[i] < heights[idx]) {
                idx = i;
            } else if (heights[i] > heights[idx]) {
                break;
            }
        }

        if (idx !== K) {
            V--;
            heights[idx]++;
            continue;
        }

        for(let i = K; i < heights.length; i++) {
            if (heights[i] < heights[idx]) {
                idx = i;
            } else if (heights[i] > heights[idx]) {
                break;
            }
        }

        V--;
        heights[idx]++;
    }
    return heights;
};

//console.log(pourWater([2,1,1,2,1,2,2], 4, 3));

//console.log(pourWater([3,1,3], 5, 1));

// console.log(pourWater([1,2,3,4,3,2,1,2,3,4,3,2,1],
// 5,
// 5));
//
console.log(pourWater([1,2,3,4],
    2,

    2));

// console.log(pourWater([1,2,3,4,3,2,1,2,3,4,3,2,1],
// 10,
// 2));