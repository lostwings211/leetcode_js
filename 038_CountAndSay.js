/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 0) {
        return "";
    }
    if(n == 1) {
        return "1";
    }
    var curr = "";
    var prev = countAndSay(n-1);
    var i = 0;
    while(i < prev.length) {
        var curr_index = i;
        while(i + 1 < prev.length && prev.charAt(i+1) == prev.charAt(i)) {
            i++;
        }
        var curr_length = i - curr_index + 1;
        curr = curr + curr_length.toString() + prev.charAt(i);
        i++;
    }
    return curr;
};