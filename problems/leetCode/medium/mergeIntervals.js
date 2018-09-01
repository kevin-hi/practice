/*
    Given a collection of intervals, merge all overlapping intervals.

    Example 1:

    Input: [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
    Example 2:

    Input: [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
    intervals.sort((x, y) => x[0] - y[0]);
    let i = 0;
    while(i < intervals.length - 1){
        if(intervals[i][1] >= intervals[i + 1][0]){
            intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
            intervals.splice(i + 1, 1);
        }
        else i++;
    }
    return intervals;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[5,6]]));
// console.log(merge([[1,4],[4,6]]));
// console.log(merge([[1,4],[0,4]]));
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[0,0]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));