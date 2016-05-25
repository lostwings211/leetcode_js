/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length == 0) {
        return;
    }
    var i = nums.length - 1;
    while(i > 0) {
        if(nums[i] > nums[i-1]) {
            for(var j = nums.length - 1; j >= i; j--) {
                if(nums[j] > nums[i-1]) {
                    var temp = nums[j];
                    nums[j] = nums[i-1];
                    nums[i-1] = temp;
                    break;
                }
            }
            reverse(nums, i, nums.length -1);
            return;
        }
        i--;
    }
    reverse(nums, 0, nums.length -1);
};

var reverse = function(nums, i, j) {
    while(i < j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}