/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var ret = [];
    var curr = [];
    nums.sort(function(a, b) {
        return a - b;
    });
    var visited = [];
    for(var i = 0; i < nums.length; i++) {
        visited[i] = false;
    }
    dfs(curr, visited, nums, ret);
    return ret;
};

var dfs = function(curr, visited, nums, ret) {
    if(curr.length == nums.length) {
        if(nums.length > 0) {
            ret.push(curr);
        }
        return;
    }

    for(var i = 0; i < nums.length; i++) {
        if(visited[i] == false) {
            if(i == 0 || nums[i] != nums[i-1] || visited[i-1] == true) {
                var curr_copy = copyarray(curr);
                curr_copy.push(nums[i]);
                visited[i] = true;
                dfs(curr_copy, visited, nums, ret);
                visited[i] = false;
            }
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