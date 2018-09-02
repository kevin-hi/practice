/*
    Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

    Example 1:

    Input: [[0, 30],[5, 10],[15, 20]]
    Output: 2
    Example 2:

    Input: [[7,10],[2,4]]
    Output: 1
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
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
    const start = [];
    const end = [];
    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0]);
        end.push(intervals[i][1]);
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let rooms = 0;
    let endsItr = 0;

    for (let i = 0; i < start.length; i++) {
        if(start[i] < end[endsItr]) {
            rooms++;
        } else {
            endsItr++;
        }
    }

    return rooms;
};

// console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20]]));
// console.log(minMeetingRooms([[9,10],[4,9],[4,17]]));
//
//
// console.log(minMeetingRooms([[7,10],[2,4]]));

console.log(minMeetingRooms([[6,15],[13,20],[6,17]]));
//console.log(minMeetingRooms([[13,15],[1,13]]));
