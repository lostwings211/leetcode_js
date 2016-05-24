/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var start = 0;
    var end = nums.length - 1;
    while(start <= end) {
        if(nums[start] != val) {
            start++;
        }
        else {
            while(end >= 0 && nums[end] == val)  {
                end--;
            }
            if(end > start) {
                var temp = nums[end];
                nums[end--] = nums[start];
                nums[start++] = temp;
            }
        }
    }
    return start;
};