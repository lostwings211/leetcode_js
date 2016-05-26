/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 0) {
        return 0;
    }
    var start = 0;
    var end = nums.length - 1;
    var mid = 0;
    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(nums[mid] == target) {
            break;
        }
        else if(nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    if(nums[mid] >= target) {
        return mid;
    }
    else {
        return mid + 1;
    }
};