/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var index = 0;
    while(index <  nums.length) {
        if(nums[index] > 0 && nums[index] <= nums.length && nums[nums[index] - 1] != nums[index]) {
            var temp = nums[nums[index] - 1];
            nums[nums[index] - 1] = nums[index];
            nums[index] = temp;
        }
        else {
            index++;
        }
    }

    for(index = 0; index < nums.length; index++) {
        if(nums[index] != index + 1) {
            return index + 1;
        }
    }
    return  (nums.length + 1);
}