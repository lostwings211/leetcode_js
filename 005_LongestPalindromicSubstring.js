/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var ret = "";
    var start = 0;
    while (start < s.length) {
        var end = start
        while(end + 1 < s.length && s.charAt(end + 1) === s.charAt(start)) {
            end++;
        }

        var curr_start = start;
        var curr_end = end;
        while(curr_start - 1 >= 0 && curr_end + 1 < s.length && s.charAt(curr_start - 1) === s.charAt(curr_end + 1)) {
            curr_start--;
            curr_end++
        }
        if(curr_end - curr_start + 1 > ret.length) {
            ret = s.substring(curr_start, curr_end + 1);;
        }
        start = end + 1;
    }
    return ret;
};