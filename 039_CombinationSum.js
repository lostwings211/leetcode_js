/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ret = [];
    candidates.sort(function(a, b) {
        return a - b;
    });
    if(candidates.length == 0) {
        return ret;
    }
    dfs([], candidates, 0, target);
    return ret;

    function dfs(curr, candidates, index, target) {
        if(target < 0) {
            return;
        }
        if(target == 0) {
            ret.push(copyarray(curr));
            return;
        }
        for(var i = index; i < candidates.length; i++) {
            var newtarget = target - candidates[i];
            var temp = copyarray(curr);
            temp.push(candidates[i]);
            dfs(temp, candidates, i, newtarget);
        }
        return;
    }

    function copyarray(curr) {
        var temp =[];
        for(var i = 0; i < curr.length; i++) {
            temp.push(curr[i]);
        }
        return temp;
    }
};