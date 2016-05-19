/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return "";
    }
    if(strs.length == 1) {
        return strs[0];
    }
    var ret = "";
    for(var i = 0; i < strs[0].length; i++) {
        var curr_char = strs[0].charAt(i);
        for(var index = 1; index < strs.length; index++) {
            if(strs[index].charAt(i) != curr_char) {
                return ret;
            }
        }
        ret = ret + curr_char;
    }
    return ret;
};