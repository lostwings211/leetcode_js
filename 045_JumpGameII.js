/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var dp = [];
    var i = 0;
    for(i = 0; i < nums.length; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
    }

    for(i = nums.length - 1; i >= 0; i--) {
        if(i == nums.length - 1) {
            dp[i] = 0;
        }
        else {
            var span = i + nums[i] > nums.length -1 ? nums.length - 1 : i + nums[i];
            var curr_ret = Number.MAX_SAFE_INTEGER;
            for(var j = i + 1; j <= span; j++) {
                if(dp[j] + 1 < curr_ret) {
                    curr_ret = dp[j] + 1;
                }
            }
            dp[i] = curr_ret;
        }
    }
    return dp[0];
};

console.log(jump([2,3,1,1,4]));