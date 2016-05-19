/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var ret = [];
    var m = 0;
    while(m < nums.length) {
        var n = m + 1;
        while(n < nums.length) {
            var i = n + 1;
            var j = nums.length -1;
            while(i < j) {
                if (nums[i] + nums[j] == target - (nums[m] + nums[n])) {
                    var curr = [];
                    curr.push(nums[m]);
                    curr.push(nums[n]);
                    curr.push(nums[i]);
                    curr.push(nums[j]);
                    ret.push(curr);
                    i++;
                    while(i < nums.length && nums[i] == nums[i-1]) {
                        i++;
                    }
                }
                else if (nums[i] + nums[j] < target - (nums[m] + nums[n])) {
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
            n++;
            while(n < nums.length && nums[n] == nums[n-1]) {
                n++;
            }
        }
        m++;
        while(m < nums.length && nums[m] == nums[m-1]) {
            m++;
        }
    }
    return ret;
};