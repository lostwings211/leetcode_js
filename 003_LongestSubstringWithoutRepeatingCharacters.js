/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var start = 0;
    var visited = {};
    for (var i = 0; i < s.length; i++) {
        var curr_char = s.charAt(i);
        if(!visited.hasOwnProperty(curr_char) || start > visited[curr_char]) {
            if(i - start + 1 > max) {
                max = i - start + 1;
            }
        }
        else {
            start =  visited[curr_char] + 1;
        }
        visited[curr_char] = i;
    }
    return max;
};