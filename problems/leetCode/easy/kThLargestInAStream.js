/*
    Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

    Example:

    int k = 3;
    int[] arr = [4,5,8,2];
    KthLargest kthLargest = new KthLargest(3, arr);
    kthLargest.add(3);   // returns 4
    kthLargest.add(5);   // returns 5
    kthLargest.add(10);  // returns 5
    kthLargest.add(9);   // returns 8
    kthLargest.add(4);   // returns 8
    Note:
    You may assume that nums' length ≥ k-1 and k ≥ 1.
 */

/*
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;

    this.heap = [-1].concat(nums.slice(0, k));
    if (this.heap.length <= k) return this;
    heapMake(this.heap);
    nums.slice(k).forEach(x => heapAdd(this.heap, x))
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.heap.length === this.k) {
        this.heap.push(val);
        heapMake(this.heap);
        return this.heap[1];
    }
    heapAdd(this.heap, val);
    return this.heap[1];
};


function heapAdd (arr, num) {
    if (num <= arr[1]) return;
    arr[1] = num;
    heapAjust(arr, 1, arr.length - 1);
    return arr[1];
}

function heapMake (arr) {
    for (let i = Math.floor((arr.length - 1) / 2); i > 0; i--) {
        heapAjust(arr, i, arr.length - 1)
    }
}

function heapAjust (arr, s, e) {
    for (let i = 2 * s; i <= e; i *= 2) {
        if (i < e && arr[i] > arr[i + 1]) i++;
        if (arr[s] <= arr[i]) break;
        let tmp = arr[i];
        arr[i] = arr[s];
        arr[s] = tmp;
        s = i;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */

// const obj =  new KthLargest(3,[4,5,8,2]);
//
// console.log(obj.add(3));
// console.log(obj.add(5));
// console.log(obj.add(10));
// console.log(obj.add(9));
// console.log(obj.add(4));

const obj =  new KthLargest(1,[-2]);

console.log(obj.add(-3));
console.log(obj.add(0));
console.log(obj.add(2));
console.log(obj.add(-1));
console.log(obj.add(4));
