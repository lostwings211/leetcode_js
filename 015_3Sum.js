/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });

    var ret = [];
    var k = 0;
    while(k < nums.length) {
        var i = k + 1;
        var j = nums.length - 1;
        while(i < j) {
            if(nums[i] + nums[j] == -nums[k]) {
                var curr = [];
                curr.push(nums[k]);
                curr.push(nums[i]);
                curr.push(nums[j]);
                ret.push(curr);
                i++;
                while(i < nums.length && nums[i] == nums[i-1]) {
                    i++;
                }
            }
            else if (nums[i] + nums[j] < -nums[k]) {
                i++;
                while(i < nums.length && nums[i] == nums[i-1]) {
                    i++;
                }
            }
            else {
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