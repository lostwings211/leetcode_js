/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ret = [];
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        var curr =  nums[i];
        if(map.hasOwnProperty(curr.toString())) {
            ret.push(map[curr.toString()]);
            ret.push(i);
            break;
        }
        else {
            curr =  target - nums[i];
            map[curr.toString()] = i;
        }
    }
    return ret;
};