/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length == 0) {
        return -1;
    }
    var pivot = 0;
    while(pivot +  1 < nums.length && nums[pivot] <= nums[pivot+1]) {
        pivot++;
    }
    var start = 0;
    var end = nums.length -1;
    while(start <= end) {
        var mid = Math.floor((start + end) / 2);
        var mid_adjust =  mid + pivot + 1 >= nums.length ? mid + pivot + 1 - nums.length : mid + pivot + 1;
        if(nums[mid_adjust] == target) {
            return mid_adjust;
        }
        else if(nums[mid_adjust] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
};