/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ret = [];
    if(nums.length == 0) {
        return ret;
    }
    var curr = [];
    dfs(curr, nums, ret);
    return ret;
};

var dfs = function(curr, nums, ret) {
    if(curr.length == nums.length) {
        ret.push(curr);
        return;
    }

    for(var i = 0; i < nums.length; i++) {
        if(curr.indexOf(nums[i]) < 0) {
            var curr_copy = copyarray(curr);
            curr_copy.push(nums[i]);
            dfs(curr_copy, nums, ret);
        }
    }
}

var copyarray = function (curr) {
    var temp =[];
    for(var i = 0; i < curr.length; i++) {
        temp.push(curr[i]);
    }
    return temp;
}