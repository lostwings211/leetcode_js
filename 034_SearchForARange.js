/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0) {
        return [-1, -1];
    }
    var start = 0;
    var end = nums.length - 1;
    while(start <= end) {
        var mid = Math.floor((start + end) / 2);
        if(nums[mid] == target) {
            var i = mid;
            var j = mid;
            while(i - 1 >= 0 && nums[i-1] == target) {
                i--;
            }
            while(j + 1 < nums.length && nums[j+1] == target) {
                j++;
            }
            return [i, j];
        }
        else if(nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return [-1, -1];
};