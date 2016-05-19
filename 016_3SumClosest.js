/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });

    var ret = nums[0] + nums[1] + nums[2];
    var k = 0;
    while(k < nums.length) {
        var i = k + 1;
        var j = nums.length - 1;
        while(i < j) {
            if(nums[i] + nums[j] == target - nums[k]) {
                return target;
            }
            else if(nums[i] + nums[j] < target - nums[k]) {
                if(Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(ret - target)) {
                    ret = nums[i] + nums[j] + nums[k];
                }
                i++;
                while(i < nums.length && nums[i] == nums[i-1]){
                    i++;
                }
            }
            else {
                if(Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(ret - target)) {
                    ret = nums[i] + nums[j] + nums[k];
                }
                j--;
                while(j >= 0 && nums[j] == nums[j+1]) {
                    j--;
                }
            }
        }
        k++;
        while(k < nums.length && nums[k] == nums[k-1]) {
            k++;
        }
    }
    return ret;
};