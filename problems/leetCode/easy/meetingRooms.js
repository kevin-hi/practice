/*
    Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

    Example 1:

    Input: [[0,30],[5,10],[15,20]]
    Output: false
    Example 2:

    Input: [[7,10],[2,4]]
    Output: true
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
 * @return {boolean}
 */
const canAttendMeetings = function(intervals) {

    const busy = [];

    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
            if(busy[j]) return false;
            busy[j] = true;
        }
    }

    return true;

};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendMeetings([[7,10],[2,4]]));