/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var ret = 0;
    var i = 0;
    var j = height.length - 1;
    while(i < j) {
        if(Math.min(height[i], height[j]) * (j - i) > ret) {
            ret = Math.min(height[i], height[j]) * (j - i);
        }
        if(height[i] <= height[j]) {
            i++;
        }
        else {
            j--;
        }
    }
    return ret;
};