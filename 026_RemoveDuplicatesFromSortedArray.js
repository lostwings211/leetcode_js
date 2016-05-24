/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var number = 0;
    var i = 0;
    while(i < nums.length) {
        nums[number++] = nums[i];
        var j = i + 1;
        while(j < nums.length && nums[j] == nums[j-1]) {
            j++;
        }
        i = j;
    }
    return number;
};